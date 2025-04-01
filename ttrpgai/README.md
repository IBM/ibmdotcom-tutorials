# TTRPG Rules Assistant

A web application that helps Game Masters quickly find answers to tabletop RPG rules questions and generate encounters using the Granite 3.2 model. The application supports uploading custom rule sets in PDF format.

## Features

- Select game version (D&D 5E, 3.5, 4E, or custom rule sets)
- Upload and process custom PDF rule sets
- Ask rules questions in natural language
- Generate random encounters based on party size, level, and environment
- Styled with a medieval fantasy theme
- Built with TypeScript, React, and Node.js

## Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Ollama (latest version) with Granite 3.2 model installed

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dnd-rules-assistant
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Build the backend:
```bash
npm run build
```

## Setting Up Ollama

1. Install Ollama from [ollama.ai](https://ollama.ai)

2. Pull the Granite 3.2 model:
```bash
ollama pull granite3.2:8b
```

3. Start the Ollama service:
```bash
ollama serve
```

## Running the Application

1. Start the backend server (in the backend directory):
```bash
cd backend
npm start
```

2. In a new terminal, start the frontend development server (in the project root):
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Technology Stack

### Frontend
- TypeScript ^5.0.0
- React ^18.2.0
- Vite ^5.0.0
- Material-UI ^5.13.0
- Axios ^1.6.0

### Backend
- Node.js ^18.0.0
- Express ^4.18.2
- Multer ^1.4.5-lts.1
- pdf-parse ^1.1.1
- TypeScript ^5.3.3

### AI Model
- Ollama with Granite 3.2:8b model

## Project Structure

```
dnd-rules-assistant/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   ├── services/          # API services
│   └── App.tsx            # Main application component
├── backend/               # Backend server
│   ├── src/              # Backend source files
│   └── uploads/          # Temporary PDF storage
└── public/               # Static assets
    └── assets/          # Images and other media
```

## Usage

1. Start by selecting a game version from the dropdown menu or upload your own rule set PDF.
2. To upload custom rules:
   - Click "Upload Rule Set"
   - Select or drag-and-drop a PDF file
   - The rule set will appear in both the rule sets list and version dropdown

3. To ask rules questions:
   - Type your question in the text field
   - Click "Ask the Sage"
   - The answer will appear below

4. To generate encounters:
   - Enter party size and level
   - Select an environment
   - Click "Generate Encounter"
   - The encounter details will appear below

## Environment Variables

None required by default, but you can customize these if needed:
- `VITE_OLLAMA_URL`: Ollama API URL (default: http://localhost:11434)
- `BACKEND_PORT`: Backend server port (default: 3001)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Troubleshooting

1. If Ollama connection fails:
   - Ensure Ollama is running (`ollama serve`)
   - Check if the Granite 3.2 model is installed (`ollama list`)
   - Verify the API URL in `src/services/ollama.ts`

2. If PDF upload fails:
   - Check backend console for errors
   - Ensure the uploads directory exists
   - Verify PDF file size is reasonable

3. If the application doesn't start:
   - Check if all dependencies are installed
   - Verify Node.js and npm versions
   - Look for errors in the terminal output
