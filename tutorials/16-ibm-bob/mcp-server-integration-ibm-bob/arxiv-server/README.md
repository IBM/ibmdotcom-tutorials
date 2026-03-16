# arXiv MCP Server

A Model Context Protocol (MCP) server that provides read-only access to arXiv research papers. This server enables AI assistants to search and retrieve paper metadata and abstracts from arXiv's extensive database of scientific publications.

## Features

- 🔍 **Search arXiv papers** - Query the arXiv database using flexible search syntax
- 📄 **Metadata only** - Returns paper titles, authors, abstracts, and URLs (no PDF downloads)
- 🔒 **Rate limiting** - Enforces reasonable query limits (1-50 results per query)
- 🎯 **Flexible sorting** - Sort by relevance, submission date, or last updated date
- 🚫 **No API key required** - arXiv API is public and free to use

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Install dependencies:**
   ```bash
   cd arxiv-server
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

   This compiles the TypeScript code to JavaScript in the `build/` directory.

## Configuration

### For IBM Bob

Add the following configuration to your MCP settings file located at:
`~/Library/Application Support/IBM Bob/User/globalStorage/ibm.bob-code/settings/mcp_settings.json`

```json
{
  "mcpServers": {
    "arxiv": {
      "command": "node",
      "args": [
        "/path/to/arxiv-server/build/index.js"
      ],
      "disabled": false,
      "alwaysAllow": [],
      "disabledTools": []
    }
  }
}
```

Replace `/path/to/arxiv-server/` with the actual path to your arxiv-server directory.

### For Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "arxiv": {
      "command": "node",
      "args": [
        "/path/to/arxiv-server/build/index.js"
      ]
    }
  }
}
```

## Usage

Once configured, the server exposes the following tool:

### `search_arxiv`

Search for papers on arXiv with customizable parameters.

**Parameters:**

- `query` (required, string): Search query using arXiv query syntax
- `max_results` (optional, number): Maximum results to return (1-50, default: 10)
- `start` (optional, number): Starting index for pagination (default: 0)
- `sort_by` (optional, enum): Sort order - `"relevance"`, `"lastUpdatedDate"`, or `"submittedDate"` (default: `"relevance"`)
- `sort_order` (optional, enum): Sort direction - `"ascending"` or `"descending"` (default: `"descending"`)

**Example queries:**

```javascript
// Simple search
{
  "query": "quantum computing",
  "max_results": 5
}

// Search with sorting
{
  "query": "machine learning",
  "max_results": 10,
  "sort_by": "submittedDate",
  "sort_order": "descending"
}

// Advanced arXiv query syntax
{
  "query": "cat:cs.AI AND ti:transformer",
  "max_results": 20
}
```

**Response format:**

The tool returns formatted text containing:
- Total number of results found
- For each paper:
  - Title
  - arXiv ID
  - Authors
  - Publication date
  - Categories
  - Abstract (truncated to 300 characters)
  - URL to the paper

## arXiv Query Syntax

The server supports arXiv's advanced query syntax:

- `ti:title` - Search in title
- `au:author` - Search by author
- `abs:abstract` - Search in abstract
- `cat:category` - Filter by category (e.g., `cs.AI`, `quant-ph`)
- `AND`, `OR`, `ANDNOT` - Boolean operators

**Examples:**
- `ti:neural AND cat:cs.LG` - Neural papers in machine learning
- `au:Hinton` - Papers by Hinton
- `cat:quant-ph AND ti:quantum computing` - Quantum computing papers in quantum physics category

## Development

### Project Structure

```
arxiv-server/
├── src/
│   └── index.ts          # Main server implementation
├── build/                # Compiled JavaScript (generated)
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

### Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch mode for development
- `npm run prepare` - Runs automatically before publishing

### Making Changes

1. Edit `src/index.ts`
2. Run `npm run build` to compile
3. Restart your MCP client to load changes

## Limitations

- **No PDF access** - Only metadata and abstracts are returned
- **Rate limits** - Maximum 50 results per query
- **No authentication** - Uses public arXiv API (no private papers)
- **Read-only** - Cannot submit or modify papers

## Troubleshooting

### Server not connecting

1. Verify the path in your MCP settings is correct
2. Ensure the build directory exists: `npm run build`
3. Check that Node.js is installed: `node --version`

### No results returned

1. Try simplifying your query
2. Check arXiv's query syntax documentation
3. Verify the category codes are correct

### TypeScript errors

1. Install dependencies: `npm install`
2. Rebuild: `npm run build`

## Resources

- [arXiv API Documentation](https://info.arxiv.org/help/api/index.html)
- [arXiv Category Taxonomy](https://arxiv.org/category_taxonomy)
- [Model Context Protocol](https://modelcontextprotocol.io/)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.