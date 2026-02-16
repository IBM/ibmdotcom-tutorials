# Silly Story Time

A fun, interactive web application that generates silly stories for children with AI-generated illustrations. Create magical stories with multiple characters, choose from various themes, and get AI-generated illustrations that match your story.

## Features

- Generate fun, age-appropriate stories for children
- Create stories with multiple characters (main person and additional people)
- Choose from various themes like friendship, adventure, magic, and more
- Select story types (Adventure, Fantasy, Educational, etc.)
- Choose character types (Human Child, Animal, Robot, etc.)
- Get AI-generated illustrations that match your story
- Enjoy playful animations and a child-friendly interface
- Save your stories as images
- Background music and sound effects for an immersive experience

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- An API key from Stability AI for image generation
- Ollama running locally (optional, for story generation)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thinkscientist/ChildrenStorytime.git
   cd children-storytime
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Get an API key from [Stability AI](https://stability.ai/)
   - Add your API key to the `.env` file:
     ```
     REACT_APP_STABILITY_API_KEY=your_api_key_here
     ```

4. Set up Ollama for story generation:
   - Install Ollama from [ollama.ai](https://ollama.ai/)
   - Start the Ollama service
   - The app will automatically detect if Ollama is available
   - Ensure you have the `granite3.3` model installed
   - Once Ollama is instaled run `ollama pull granite3.3` in the terminal

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

## How to Use

1. Enter the main person's name
2. (Optional) Add additional people by clicking "Add Another Person"
3. Choose a theme for your story (e.g., Friendship, Adventure, Magic)
4. Select a story type (e.g., Adventure, Fantasy, Educational)
5. Choose a character type (e.g., Human Child, Animal, Robot)
6. Click "Generate Silly Story" to create your story
7. Wait for the story and illustration to be generated
8. Use the "Save Memory" button to save your story as an image

## Project Structure

```
children-storytime/
├── public/              # Static assets
│   └── sounds/         # Audio files
├── src/
│   ├── services/       # Service modules
│   │   ├── audioService.ts
│   │   ├── imageService.ts
│   │   ├── ollamaService.ts
│   │   └── directImageExport.ts
│   ├── types/          # TypeScript type definitions
│   ├── config.ts       # Configuration
│   └── App.tsx         # Main application component
├── .env                # Environment variables
├── .env.example        # Example environment variables
├── package.json        # Project dependencies
└── vite.config.ts      # Vite configuration
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Ollama (optional, for story generation)
- Stability AI API (for image generation)
- HTML2Canvas (for image export)
- CSS animations and transitions

## Development

- Run the development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint code: `npm run lint`

## License

MIT

## Acknowledgements

- Ollama for providing the language model
- Stability AI for the image generation API
- All the emojis and fun elements that make this app special!
