# Add your Gemini API key to .env file
# Usage: powershell -ExecutionPolicy Bypass -File add-api-key.ps1

Write-Host "SlideBuddy - Add API Key" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan
Write-Host ""

$apiKey = Read-Host "Enter your Gemini API Key"

if ($apiKey) {
    $envContent = @"
NODE_ENV=development
PORT=5000
GEMINI_API_KEY=$apiKey
"@
    $envContent | Out-File -FilePath ".env" -Encoding UTF8 -Force
    Write-Host ""
    Write-Host "[OK] API key added successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "You can now start the server with:" -ForegroundColor White
    Write-Host "  powershell -ExecutionPolicy Bypass -Command 'npm run server'" -ForegroundColor Cyan
}
else {
    Write-Host ""
    Write-Host "[ERROR] No API key entered!" -ForegroundColor Red
    Write-Host "Please run this script again and enter your API key." -ForegroundColor Yellow
}
Write-Host ""
