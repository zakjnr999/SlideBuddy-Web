# Deployment Guide for SlideBuddy 🚀

## Quick Deployment Steps

### 1. Get Your Gemini API Key
1. Go to https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key (you'll need it in step 4)

### 2. Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit - AI Study Assistant"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 3. Deploy to Render
1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `slidebuddy` (or your choice)
   - **Environment**: `Node`
   - **Build Command**: `npm run build-all`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### 4. Add Environment Variables
1. In the Render dashboard, go to "Environment"
2. Add these environment variables:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Paste your Gemini API key from step 1
   - **Key**: `NODE_ENV`
   - **Value**: `production`
3. Click "Save Changes"

### 5. Deploy!
- Render will automatically deploy your app
- Wait for the build to complete (2-3 minutes)
- Your app will be live at: `https://your-app-name.onrender.com`

## Testing Locally First

Before deploying, test locally:

### Terminal 1 - Backend:
```bash
# Add your API key to .env file first
# Then run:
powershell -ExecutionPolicy Bypass -Command "npm run server"
```

### Terminal 2 - Frontend:
```bash
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

Open http://localhost:3000 and test the app!

## Important Notes ⚠️

1. **Free Tier Limits**: Render's free tier may spin down after inactivity. First request might take 30-60 seconds.

2. **API Key Security**: Never commit your `.env` file to GitHub! It's already in `.gitignore`.

3. **Gemini API Limits**: Free tier has generous limits but check usage at https://aistudio.google.com

4. **File Size**: PDFs are limited to 10MB. Adjust in `server/index.js` if needed.

## Troubleshooting 🔧

**Build fails on Render:**
- Check that `package.json` is in the root directory
- Verify Node version compatibility

**API errors:**
- Verify your Gemini API key is correct
- Check API key has proper permissions

**PDF upload fails:**
- Ensure file is actually a PDF
- Check file size is under 10MB

## Alternative: Run on Your Machine

If you just want to demo locally:

1. Get Gemini API key (step 1 above)
2. Create a `.env` file in the project root:
   ```
   GEMINI_API_KEY=your_key_here
   PORT=5000
   ```
3. Run both servers (see "Testing Locally First" above)
4. Open http://localhost:3000

---

Good luck with your presentation! 🎓
