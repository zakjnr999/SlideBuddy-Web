# SlideBuddy 🎓

An intelligent AI-powered study platform that helps students learn smarter by automatically generating summaries and practice questions from lecture slides. Upload your PDFs, get instant AI analysis, and save your study history to the cloud!

**Live Demo:** https://slidebuddy-host.onrender.com

## ✨ Features

### Core Features
- 📄 **PDF Upload** - Drag-and-drop or click to upload lecture slides
- 🤖 **AI-Powered Summaries** - Get concise summaries using Google Gemini AI
- ❓ **Practice Questions** - Auto-generated Q&A to test your knowledge
- 📋 **Easy Copy** - Copy summaries and questions with one click

### User Features
- 🔐 **User Authentication** - Secure signup/signin with JWT tokens
- 💾 **Save History** - Auto-save every PDF to your account
- 📚 **History Page** - View all your processed PDFs in one place
- 🔍 **Detail View** - Click any saved item to see full summary & questions
- 🗑️ **Manage History** - Delete individual items or clear all

### Design
- 🎨 **Modern UI** - Beautiful dark theme with purple gradients
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ✨ **Smooth Animations** - Polished user experience
- 🌐 **Multiple Pages** - Home, Features, About, History

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom styling with animations
- **localStorage** - Client-side session persistence

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **JWT** - Secure authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **pdf-parse** - PDF text extraction

### AI
- **Google Gemini 1.5 Flash** - Latest AI model for summaries & questions

### Deployment
- **Render** - Cloud hosting platform
- **GitHub** - Version control & CI/CD

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account ([Sign up free](https://www.mongodb.com/cloud/atlas))
- Google Gemini API Key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zakjnr999/SlideBuddy.git
   cd SlideBuddy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Run the application:**

   **Development mode (recommended):**
   ```bash
   # Terminal 1 - Start backend server
   npm run server

   # Terminal 2 - Start frontend dev server
   npm run dev
   ```

   Then open http://localhost:3000 in your browser

5. **Production build:**
   ```bash
   npm run build-all
   npm start
   ```

## 📖 Usage

1. **Sign Up** - Create your account
2. **Upload PDF** - Drag & drop your lecture slides
3. **Get Results** - AI generates summary & practice questions
4. **Auto-Save** - Results saved to your history automatically
5. **View History** - Access all your saved PDFs anytime
6. **Study Anywhere** - Login from any device to access your history

## 📁 Project Structure

```
slidebuddy/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   ├── Results.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── About.jsx
│   │   │   ├── History.jsx
│   │   │   └── Auth.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── dist/              # Production build
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── History.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── history.js
│   ├── middleware/
│   │   └── auth.js
│   └── index.js
├── docs/                  # Documentation
├── scripts/               # Utility scripts
└── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/signin` - Login to account
- `GET /api/auth/me` - Get current user

### PDF Processing
- `POST /api/process-pdf` - Upload and process PDF file

### History
- `GET /api/history` - Get user's history
- `POST /api/history` - Save new item
- `DELETE /api/history/:id` - Delete specific item
- `DELETE /api/history` - Clear all history

### Health
- `GET /api/health` - Health check endpoint

## 🌐 Deployment

### Deploy to Render

1. **Fork/Clone this repository**
2. **Create a new Web Service on Render**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - Build Command: `npm run build-all`
   - Start Command: `npm start`
5. **Add environment variables:**
   - `GEMINI_API_KEY` - Your Gemini API key
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - Your JWT secret key
   - `NODE_ENV` - Set to `production`
6. **Deploy!**

Render will automatically redeploy when you push to the main branch.

## 🔒 Security

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token authentication (30-day expiration)
- ✅ Protected API routes with middleware
- ✅ HTTPS encryption (provided by Render)
- ✅ Input validation and sanitization
- ✅ Environment variables for secrets
- ✅ CORS configuration

## 📱 Mobile App (Coming Soon)

Flutter mobile app in development with features:
- 📸 Camera to PDF scanning
- 📴 Offline mode
- 🔔 Study reminders
- 📊 Progress tracking

Expected release: January 20, 2026

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit a pull request

## 📄 License

MIT License - feel free to use this for your studies!

## 🙏 Acknowledgments

- Google Gemini AI for powerful language models
- MongoDB Atlas for cloud database
- Render for hosting
- All students who need better study tools!

---

**Built with ❤️ for students everywhere**

*Transform your study materials with AI - Upload, Analyze, Learn!*
