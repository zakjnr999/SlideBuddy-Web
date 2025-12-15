# SlideBuddy Project Restructuring Script

Write-Host "Restructuring SlideBuddy project..." -ForegroundColor Cyan
Write-Host ""

# Create new directories
Write-Host "[1/6] Creating directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path "backend" -Force | Out-Null
New-Item -ItemType Directory -Path "frontend" -Force | Out-Null
New-Item -ItemType Directory -Path "docs" -Force | Out-Null
New-Item -ItemType Directory -Path "scripts" -Force | Out-Null
Write-Host "      Done" -ForegroundColor Green

# Move backend files
Write-Host "[2/6] Moving backend files..." -ForegroundColor Yellow
Move-Item -Path "server\index.js" -Destination "backend\index.js" -Force
Copy-Item -Path ".env" -Destination "backend\.env" -Force
Remove-Item -Path "server" -Recurse -Force
Write-Host "      Done" -ForegroundColor Green

# Move frontend files
Write-Host "[3/6] Moving frontend files..." -ForegroundColor Yellow
Move-Item -Path "src" -Destination "frontend\src" -Force
Move-Item -Path "index.html" -Destination "frontend\index.html" -Force
Move-Item -Path "vite.config.js" -Destination "frontend\vite.config.js" -Force
Write-Host "      Done" -ForegroundColor Green

# Move documentation
Write-Host "[4/6] Moving documentation..." -ForegroundColor Yellow
Move-Item -Path "DEPLOYMENT.md" -Destination "docs\DEPLOYMENT.md" -Force
Move-Item -Path "BRANDING.md" -Destination "docs\BRANDING.md" -Force
Move-Item -Path "BUGFIXES.md" -Destination "docs\BUGFIXES.md" -Force
Move-Item -Path "QUICK_START.md" -Destination "docs\QUICK_START.md" -Force
Write-Host "      Done" -ForegroundColor Green

# Move scripts
Write-Host "[5/6] Moving scripts..." -ForegroundColor Yellow
Move-Item -Path "setup.ps1" -Destination "scripts\setup.ps1" -Force
Move-Item -Path "add-api-key.ps1" -Destination "scripts\add-api-key.ps1" -Force
Write-Host "      Done" -ForegroundColor Green

# Delete unnecessary files
Write-Host "[6/6] Cleaning up..." -ForegroundColor Yellow
Remove-Item -Path "API_404_FIX.md" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "API_FIX_GUIDE.md" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "PRESENTATION_GUIDE.md" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "test-api-quick.bat" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "test-api.js" -Force -ErrorAction SilentlyContinue
Write-Host "      Done" -ForegroundColor Green

Write-Host ""
Write-Host "Restructuring complete!" -ForegroundColor Green
Write-Host ""
Write-Host "New structure:" -ForegroundColor Cyan
Write-Host "  backend/    - Server code" -ForegroundColor White
Write-Host "  frontend/   - React app" -ForegroundColor White
Write-Host "  docs/       - Documentation" -ForegroundColor White
Write-Host "  scripts/    - Setup scripts" -ForegroundColor White
Write-Host ""
