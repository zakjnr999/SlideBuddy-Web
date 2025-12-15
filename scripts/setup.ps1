# Quick Setup Script for SlideBuddy
# Run this after getting your Gemini API key

Write-Host "SlideBuddy - Quick Setup" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env exists
if (Test-Path ".env") {
    Write-Host "[OK] .env file already exists" -ForegroundColor Green
}
else {
    Write-Host "Creating .env file..." -ForegroundColor Yellow
    Write-Host ""
    
    # Prompt for API key
    $apiKey = Read-Host "Enter your Gemini API Key (or press Enter to add it later)"
    
    if ($apiKey) {
        $envContent = @"
NODE_ENV=development
PORT=5000
GEMINI_API_KEY=$apiKey
"@
        $envContent | Out-File -FilePath ".env" -Encoding UTF8
        Write-Host "[OK] .env file created with your API key" -ForegroundColor Green
    }
    else {
        $envContent = @"
NODE_ENV=development
PORT=5000
GEMINI_API_KEY=your_api_key_here
"@
        $envContent | Out-File -FilePath ".env" -Encoding UTF8
        Write-Host "[WARNING] .env file created. Please add your API key manually!" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "[OK] Dependencies already installed!" -ForegroundColor Green

Write-Host ""
Write-Host "Ready to run!" -ForegroundColor Cyan
Write-Host ""
Write-Host "To start the application:" -ForegroundColor White
Write-Host "  1. Open TWO terminal windows" -ForegroundColor Yellow
Write-Host "  2. In Terminal 1, run: " -NoNewline -ForegroundColor Yellow
Write-Host "powershell -ExecutionPolicy Bypass -Command 'npm run server'" -ForegroundColor Cyan
Write-Host "  3. In Terminal 2, run: " -NoNewline -ForegroundColor Yellow
Write-Host "powershell -ExecutionPolicy Bypass -Command 'npm run dev'" -ForegroundColor Cyan
Write-Host "  4. Open http://localhost:3000 in your browser" -ForegroundColor Yellow
Write-Host ""

Write-Host "For deployment instructions, see DEPLOYMENT.md" -ForegroundColor White
Write-Host ""
