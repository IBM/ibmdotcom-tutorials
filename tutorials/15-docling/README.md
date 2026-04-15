# Docling Tutorials

This directory contains tutorials focused on [Docling](https://github.com/docling-project/docling), IBM's open-source toolkit for parsing and converting documents from a wide range of formats.

## What is Docling?

Docling is an IBM open-source library for parsing documents and exporting them to preferred formats. It supports:

- **Input formats**: PDF, DOCX, PPTX, XLSX, Images, HTML, AsciiDoc, Markdown
- **Output formats**: Markdown, JSON
- **OCR support**: Optical character recognition for scanned documents

Common use cases include processing medical records, banking documents, travel documents, and any scenario where unstructured data needs to be converted into a machine-readable structured format.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/15-docling
   ```
3. Open and run the tutorials

## Tutorials

### 1. **Convert Unstructured Data to Structured Data** (`unstructured-data-conversion.ipynb`)
Use Docling with Python to convert unstructured data contained in a group of scanned files into a structured format.
- **Author**: Erika Russi
- **Topics**: Document parsing, unstructured-to-structured conversion, OCR, Docling export formats
- **Prerequisites**: RAG dependencies (`requirements-rag.txt`)
- **Estimated time**: 30–40 minutes

---

## Related Docling Tutorials

The following Docling tutorials are located in the [01-rag-and-retrieval](../01-rag-and-retrieval/) category:

### [Docling Granite Question Answering](../01-rag-and-retrieval/docling_granite_question_answering.ipynb)
Build a document-based question answering system using Docling and IBM Granite 3.1.
- **Topics**: Document parsing, Q&A systems, Docling + Ollama integration, large context windows
- **Prerequisites**: RAG dependencies + Ollama

### [DeepSeek RAG Reasoning with Docling](../01-rag-and-retrieval/deepseek_rag_reasoning_docling_watsonx.ipynb)
Advanced RAG with reasoning capabilities using DeepSeek and Docling on watsonx.
- **Topics**: Reasoning over documents, advanced retrieval, Docling integration, watsonx
- **Prerequisites**: RAG dependencies + Ollama

---

## Key Concepts

### Structured vs. Unstructured Data
- **Structured data**: Information organized into a fixed field within a record or file (SQL databases, JSON, XML, CSV, Excel spreadsheets). Ready for efficient data processing, analysis, and management.
- **Unstructured data**: Information that does not conform to a predefined data model or schema. Typically text-heavy (emails, social media posts, customer reviews) or non-text formats (audio recordings, video files, images). Makes up ~90% of enterprise information.

### Why Convert Unstructured to Structured?
- **Analysis automation**: Run real-time queries and analytics
- **Machine interpretability**: Algorithms can process structured data directly
- **Integration**: Feed into databases, pipelines, and downstream AI systems

### Docling Pipeline
1. **Document Loading**: Ingest files (PDF, DOCX, images, etc.)
2. **Parsing**: Extract text, tables, and layout information
3. **OCR** (optional): Recognize text in scanned images
4. **Export**: Output as Markdown or JSON for downstream use

## Common Use Cases

- **Healthcare**: Scan and structure medical records and lab reports
- **Finance**: Process banking documents, invoices, and statements
- **Legal**: Extract structured data from contracts and filings
- **Logistics**: Parse shipping documents and travel records
- **RAG pipelines**: Pre-process documents before embedding and retrieval

## Additional Resources

- [Docling GitHub Repository](https://github.com/docling-project/docling)
- [IBM Think: Unstructured Data](https://www.ibm.com/think/topics/unstructured-data)
- [IBM Think: Structured vs. Unstructured Data](https://www.ibm.com/think/topics/structured-vs-unstructured-data)
- [IBM Think: OCR](https://www.ibm.com/think/topics/optical-character-recognition)
- [Main Repository README](../../README.md)
- [RAG and Retrieval Tutorials](../01-rag-and-retrieval/README.md)

## Contributing

Found an issue or want to add a new Docling tutorial? Please open an issue or pull request in the [GitHub repository](https://github.com/IBM/ibmdotcom-tutorials).

## License

See the [LICENSE](../../LICENSE) file in the repository root for license information.