import json
import logging
from pathlib import Path
import json

import ibm_watsonx_ai

from ai_service import deployable_ai_service
from scripts.build_package import build_zip_sc, get_package_name_and_version
from utils import load_config

logging.basicConfig()
logger = logging.getLogger(__name__)

config = load_config()
dep_config = config["deployment"]

client = ibm_watsonx_ai.APIClient(
    credentials=ibm_watsonx_ai.Credentials(url=dep_config["watsonx_url"], api_key=dep_config["watsonx_apikey"]),
    space_id=dep_config["space_id"])

root_dir = Path(__file__).parents[1]
pyproject_path = root_dir / "pyproject.toml"
pkg_name, pkg_version = get_package_name_and_version(str(pyproject_path))

# Create package extension
pkg_ext_metadata = {
    client.package_extensions.ConfigurationMetaNames.NAME: pkg_name,
    client.package_extensions.ConfigurationMetaNames.TYPE: "pip_zip"
}

pkg_ext_sc = root_dir / "dist" / f"{pkg_name.replace('-', '_')}-{pkg_version}.zip"

if not pkg_ext_sc.exists():
    build_zip_sc(pkg_ext_sc)
else:
    logger.warning(
        f"package extension was not built as path: '{pkg_ext_sc}' is not empty. Using the already existing path for deployment. "
        "In case of any problems you might want to delete it and rerun the `deploy.py` script")

pkg_ext_asset_details = client.package_extensions.store(
    meta_props=pkg_ext_metadata,
    file_path=str(pkg_ext_sc)
)
pkg_ext_asset_id = client.package_extensions.get_id(pkg_ext_asset_details)

# Select base software specification to extend
base_sw_spec_id = client.software_specifications.get_id_by_name("runtime-24.1-py3.11")

# Define new software specification based on base one and custom library
template_sw_spec_name = f"{pkg_name}-sw-spec"

sw_spec_metadata = {
    client.software_specifications.ConfigurationMetaNames.NAME:
        template_sw_spec_name,
    client.software_specifications.ConfigurationMetaNames.BASE_SOFTWARE_SPECIFICATION:
        {"guid": base_sw_spec_id},
    client.software_specifications.ConfigurationMetaNames.PACKAGE_EXTENSIONS:
        [{"guid": pkg_ext_asset_id}]
}

# Delete if sw_spec already exists
try:
    sw_spec_id = client.software_specifications.get_id_by_name(template_sw_spec_name)
    logger.warning(f"Deleting previously created sw_spec: {template_sw_spec_name}")
    client.software_specifications.delete(sw_spec_id)
except ibm_watsonx_ai.wml_client_error.ResourceIdByNameNotFound:
    pass

# Store the software spec
sw_spec_asset_details = client.software_specifications.store(meta_props=sw_spec_metadata)

# Get the id of the new asset
asset_id = client.software_specifications.get_id(sw_spec_asset_details)

sw_spec_asset_details = client.software_specifications.get_details(asset_id)


with (root_dir / "schema" / "request.json").open("r", encoding="utf-8") as file:
    request_schema = json.load(file)

with (root_dir / "schema" / "response.json").open("r", encoding="utf-8") as file:
    response_schema = json.load(file)

meta_props = {
    client.repository.AIServiceMetaNames.SOFTWARE_SPEC_ID: asset_id,
    client.repository.AIServiceMetaNames.NAME: "online ai_service",
    client.repository.AIServiceMetaNames.REQUEST_DOCUMENTATION: request_schema,
    client.repository.AIServiceMetaNames.RESPONSE_DOCUMENTATION: response_schema,
    client.repository.AIServiceMetaNames.TAGS: ["wx-agent"]
}

stored_ai_service_details = client.repository.store_ai_service(deployable_ai_service, meta_props)
ai_service_id = stored_ai_service_details["metadata"].get("id")

meta_props = {
    client.deployments.ConfigurationMetaNames.NAME:
        f"online ai_service test",
    client.deployments.ConfigurationMetaNames.ONLINE: {},
    client.deployments.ConfigurationMetaNames.CUSTOM: {
        "space_id": client.default_space_id,
        "url": client.credentials.url,
        **dep_config["custom"],
    },
    client.repository.AIServiceMetaNames.TAGS: ["wx-agent"]

}

deployment_details = client.deployments.create(ai_service_id, meta_props)
