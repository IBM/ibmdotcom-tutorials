import shutil
import subprocess
import tomllib
from pathlib import Path


def get_package_name_and_version(pyproject_path: str) -> tuple[str, str]:
    """
    Parse pyproject.toml to get the package name and version.

    :param pyproject_path: Path to pyproject.toml
    :type pyproject_path: str
    """
    with open(pyproject_path, "rb") as f:
        pyproject_data = tomllib.load(f)
    tool_poetry = pyproject_data.get("tool", {}).get("poetry", {})
    package_name = tool_poetry.get("name")
    package_version = tool_poetry.get("version")
    if not package_name or not package_version:
        raise ValueError("Package name or version is missing in pyproject.toml.")
    return package_name, package_version


def build_zip_sc(sc_dir: Path) -> None:
    """
    Build and package a source distribution as a ZIP archive.

    This function performs the following steps:
    1. Builds a source distribution using Poetry.
    2. Extracts the built archive.
    3. Normalizes file timestamps to fix ZIP timestamp issues.
    4. Creates a ZIP archive of the source directory.

    :param sc_dir: Path to the source directory for building and packaging.
    :type sc_dir: Path
    """
    subprocess.run(["poetry", "build", f"--output={sc_dir.parent}", "--format=sdist"], check=True)
    shutil.unpack_archive(sc_dir.with_suffix(".tar.gz"), sc_dir.parent)

    for file in sc_dir.parent.rglob("*"):
        if file.is_file():
            file.touch()

    zip_dir = str(sc_dir.with_suffix(""))
    shutil.make_archive(zip_dir, "zip", zip_dir)


if __name__ == "__main__":
    pkg_name, pkg_version = get_package_name_and_version("../pyproject.toml")
    pkg_ext_sc = Path(__file__).parent / ".." / "dist" / f"{pkg_name.replace('-', '_')}-{pkg_version}.zip"
    build_zip_sc(pkg_ext_sc)
