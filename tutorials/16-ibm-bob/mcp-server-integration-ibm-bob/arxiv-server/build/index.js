#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import axios from 'axios';
// Create an MCP server
const server = new McpServer({
    name: "arxiv-server",
    version: "0.1.0"
});
// Create axios instance for arXiv API
const arxivApi = axios.create({
    baseURL: 'http://export.arxiv.org/api',
    timeout: 30000,
});
/**
 * Parse arXiv API XML response to JSON
 */
function parseArxivXML(xmlData) {
    const entries = [];
    // Extract total results
    const totalResultsMatch = xmlData.match(/<opensearch:totalResults[^>]*>(\d+)<\/opensearch:totalResults>/);
    const totalResults = totalResultsMatch ? parseInt(totalResultsMatch[1]) : 0;
    const startIndexMatch = xmlData.match(/<opensearch:startIndex[^>]*>(\d+)<\/opensearch:startIndex>/);
    const startIndex = startIndexMatch ? parseInt(startIndexMatch[1]) : 0;
    const itemsPerPageMatch = xmlData.match(/<opensearch:itemsPerPage[^>]*>(\d+)<\/opensearch:itemsPerPage>/);
    const itemsPerPage = itemsPerPageMatch ? parseInt(itemsPerPageMatch[1]) : 0;
    // Extract entries
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let entryMatch;
    while ((entryMatch = entryRegex.exec(xmlData)) !== null) {
        const entryXml = entryMatch[1];
        // Extract ID
        const idMatch = entryXml.match(/<id>([^<]+)<\/id>/);
        const id = idMatch ? idMatch[1] : '';
        // Extract title
        const titleMatch = entryXml.match(/<title>([^<]+)<\/title>/);
        const title = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ') : '';
        // Extract summary
        const summaryMatch = entryXml.match(/<summary>([^<]+)<\/summary>/);
        const summary = summaryMatch ? summaryMatch[1].trim().replace(/\s+/g, ' ') : '';
        // Extract authors
        const authors = [];
        const authorRegex = /<author>\s*<name>([^<]+)<\/name>/g;
        let authorMatch;
        while ((authorMatch = authorRegex.exec(entryXml)) !== null) {
            authors.push({ name: authorMatch[1].trim() });
        }
        // Extract published date
        const publishedMatch = entryXml.match(/<published>([^<]+)<\/published>/);
        const published = publishedMatch ? publishedMatch[1] : '';
        // Extract updated date
        const updatedMatch = entryXml.match(/<updated>([^<]+)<\/updated>/);
        const updated = updatedMatch ? updatedMatch[1] : '';
        // Extract categories
        const categories = [];
        const categoryRegex = /<category[^>]+term="([^"]+)"/g;
        let categoryMatch;
        while ((categoryMatch = categoryRegex.exec(entryXml)) !== null) {
            categories.push(categoryMatch[1]);
        }
        const primary_category = categories[0] || '';
        // Extract links
        const links = [];
        const linkRegex = /<link[^>]+href="([^"]+)"[^>]+rel="([^"]+)"(?:[^>]+type="([^"]+)")?/g;
        let linkMatch;
        while ((linkMatch = linkRegex.exec(entryXml)) !== null) {
            links.push({
                href: linkMatch[1],
                rel: linkMatch[2],
                type: linkMatch[3]
            });
        }
        entries.push({
            id,
            title,
            summary,
            authors,
            published,
            updated,
            categories,
            primary_category,
            links
        });
    }
    return {
        entries,
        totalResults,
        startIndex,
        itemsPerPage
    };
}
/**
 * Format search results for display
 */
function formatSearchResults(result) {
    let output = `Found ${result.totalResults} results (showing ${result.entries.length})\n\n`;
    result.entries.forEach((entry, index) => {
        output += `${index + 1}. ${entry.title}\n`;
        output += `   ID: ${entry.id}\n`;
        output += `   Authors: ${entry.authors.map(a => a.name).join(', ')}\n`;
        output += `   Published: ${entry.published}\n`;
        output += `   Categories: ${entry.categories.join(', ')}\n`;
        output += `   Abstract: ${entry.summary.substring(0, 300)}${entry.summary.length > 300 ? '...' : ''}\n`;
        // Find abstract link (not PDF)
        const abstractLink = entry.links.find(l => l.rel === 'alternate');
        if (abstractLink) {
            output += `   URL: ${abstractLink.href}\n`;
        }
        output += '\n';
    });
    return output;
}
// Add a tool for searching arXiv papers
server.tool("search_arxiv", {
    query: z.string().describe("Search query (supports arXiv query syntax)"),
    max_results: z.number().min(1).max(50).optional().describe("Maximum number of results to return (1-50, default: 10)"),
    start: z.number().min(0).optional().describe("Starting index for pagination (default: 0)"),
    sort_by: z.enum(["relevance", "lastUpdatedDate", "submittedDate"]).optional().describe("Sort order (default: relevance)"),
    sort_order: z.enum(["ascending", "descending"]).optional().describe("Sort direction (default: descending)")
}, async ({ query, max_results = 10, start = 0, sort_by = "relevance", sort_order = "descending" }) => {
    try {
        // Enforce reasonable limits
        const limitedMaxResults = Math.min(max_results, 50);
        const limitedStart = Math.max(start, 0);
        // Build query parameters
        const params = {
            search_query: query,
            start: limitedStart,
            max_results: limitedMaxResults,
        };
        if (sort_by) {
            params.sortBy = sort_by;
        }
        if (sort_order) {
            params.sortOrder = sort_order;
        }
        const response = await arxivApi.get('/query', { params });
        // Parse XML response
        const result = parseArxivXML(response.data);
        // Format results
        const formattedResults = formatSearchResults(result);
        return {
            content: [
                {
                    type: "text",
                    text: formattedResults,
                },
            ],
        };
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                content: [
                    {
                        type: "text",
                        text: `arXiv API error: ${error.response?.data?.message ?? error.message}`,
                    },
                ],
                isError: true,
            };
        }
        throw error;
    }
});
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
console.error('arXiv MCP server running on stdio');
// Made with Bob
