# IBM Tutorials Documentation

This repository contains the documentation for IBM Tutorials, built using MkDocs.

## Getting Started

### Prerequisites

- Python 3.x
- pip (Python package installer)

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd ibm-tutorials
```

2. Install MkDocs and the required theme:
```bash
pip install mkdocs mkdocs-material
```

### Project Structure

```
ibm-tutorials/
├── docs/               # Documentation source files
├── stylesheets/        # Custom CSS styles
└── mkdocs.yml         # MkDocs configuration file
```

### Running the Documentation Site

1. Start the development server:
```bash
mkdocs serve
```

2. Open your browser and navigate to `http://127.0.0.1:8000`

### Building the Documentation

To build the static site:

```bash
mkdocs build
```

This will create a `site` directory with the built documentation.

## Documentation Structure

The documentation is organized as follows:

- Home (`index.md`)
- About (`about.md`)
- Getting Started (`getting-started.md`)
- Tutorials (`tutorials-list.md`)
- Projects (`projects-list.md`)
- Code of Conduct (`coc.md`)
- Contributing (`contributing.md`)
- License (`license.md`)

## Contributing

1. Create a new branch for your changes
2. Make your changes to the documentation
3. Test your changes locally using `mkdocs serve`
4. Submit a pull request

## Customization

The site uses the Material theme for MkDocs with custom CSS. You can find the custom styles in the `stylesheets` directory.

## License

<PJ to Confirm>