# SlideBuddy 🎓

An intelligent web application that helps students study smarter by automatically generating summaries and practice questions from their lecture slides (PDF files) using Google Gemini AI.

Your AI-powered study buddy for acing exams!

## Features ✨

- 📄 **PDF Upload**: Drag-and-drop or click to upload lecture slides
- 🤖 **AI-Powered Summaries**: Get concise summaries of your study materials
- ❓ **Practice Questions**: Auto-generated Q&A to test your knowledge
- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations
- 📋 **Easy Export**: Copy summaries and questions with one click

## Tech Stack 🛠️

**Frontend:**
- React 18 with Vite
- Modern CSS with custom properties
- Responsive design

**Backend:**
- Node.js + Express
- Google Gemini AI API
- PDF parsing with pdf-parse
- File upload handling with Multer

## Setup Instructions 🚀

### Prerequisites
- Node.js (v16 or higher)
- Google Gemini API Key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

3. **Run the application:**

   **Development mode (recommended):**
   ```bash
   # Terminal 1 - Start backend server
   npm run server

   # Terminal 2 - Start frontend dev server
   npm run dev
   ```

   Then open http://localhost:3000 in your browser

4. **Production build:**
   ```bash
   npm run build
   npm run preview
   ```

## Deployment to Render 🌐

1. **Create a new Web Service on Render**
2. **Connect your GitHub repository**
3. **Configure the service:**
   - Build Command: `npm install`
   - Start Command: `npm run server`
4. **Add environment variable:**
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key
5. **Deploy!**

## Usage 📖

1. Open the application in your browser
2. Upload a PDF file (lecture slides, notes, etc.)
3. Click "Analyze with AI"
4. View your AI-generated summary and practice questions
5. Copy the content or upload a new PDF

## Project Structure 📁

```
slidebuddy/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── FileUpload.jsx
│   │   └── Results.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js
├── package.json
└── vite.config.js
```

## API Endpoints 🔌

- `POST /api/process-pdf` - Upload and process PDF file
- `GET /api/health` - Health check endpoint

## Contributing 🤝

Feel free to fork this project and make it your own!

## License 📄

MIT License - feel free to use this for your studies!

---

Built with ❤️ for students everywhere
