<!-- Project Title -->
# AI Prompt Generator

A powerful React application that generates detailed image prompts using AI, perfect for creating stunning visual compositions.

<!-- Project Overview -->
## Overview

This application helps users create detailed image prompts by combining subjects, actions, camera angles, and environmental settings. It uses AI to suggest appropriate lighting, atmosphere, and scene elements based on user inputs.

## Features

- 🤖 AI-powered setting suggestions
- 🎨 Dynamic element recommendations
- 📸 Camera angle visualization
- 🌅 Atmospheric scene building
- 📋 Prompt history tracking
- 📱 Responsive design

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Google's Gemini AI
- Vite

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with required environment variables:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter two subjects (e.g., "lion" and "tiger")
2. Select an action and camera angle
3. AI will suggest appropriate lighting and atmosphere
4. Customize scene elements
5. Generate your prompt!

## Project Structure

```
src/
├── components/        # React components
├── config/           # Configuration files
├── lib/             # Core logic and utilities
│   ├── gemini/      # AI integration
│   └── utils/       # Helper functions
├── types/           # TypeScript type definitions
└── App.tsx          # Main application component
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE.md for details