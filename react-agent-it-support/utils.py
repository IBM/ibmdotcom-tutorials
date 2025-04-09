import tomllib
from pathlib import Path


def load_config(section: str | None = None) -> dict:
    config = tomllib.loads((Path(__file__).parent / "config.toml").read_text())
    if section is not None:
        return config[section]
    else:
        return config
