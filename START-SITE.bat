@echo off
title Parkezza Local Preview
cd /d "%~dp0"

echo.
echo  Parkezza - Starting local preview...
echo  ====================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo  ERROR: Node.js is not installed.
  echo.
  echo  Install it from: https://nodejs.org
  echo  Choose the LTS version, then run this file again.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo  Installing dependencies first... this may take a minute.
  call npm install
  echo.
)

if exist ".next\dev\lock" (
  echo  Clearing leftover Next.js lock file...
  del /F /Q ".next\dev\lock" >nul 2>&1
)

echo  Freeing port 3000 if something is stuck there...
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do (
  echo  Stopping process %%p...
  taskkill /F /PID %%p >nul 2>&1
)

REM Extra pass for stubborn hung node servers
timeout /t 2 /nobreak >nul

echo.
echo  Starting server (first load can take 30-90 seconds)...
echo  Keep this window OPEN while you view the site.
echo  Press Ctrl+C to stop the server when done.
echo.

start "Parkezza Dev Server" /min cmd /k "npm run dev"

echo  Waiting for http://localhost:3000 to respond...
set /a tries=0

:waitloop
set /a tries+=1
if %tries% GTR 60 (
  echo.
  echo  ERROR: Server did not become ready in time.
  echo  Check the minimized "Parkezza Dev Server" window for errors.
  echo.
  pause
  exit /b 1
)

powershell -NoProfile -Command "try { $r = Invoke-WebRequest -Uri 'http://127.0.0.1:3000' -UseBasicParsing -TimeoutSec 3; if ($r.StatusCode -ge 200) { exit 0 } else { exit 1 } } catch { exit 1 }" >nul 2>&1
if errorlevel 1 (
  timeout /t 2 /nobreak >nul
  goto waitloop
)

echo  Server is ready. Opening browser...
start "" "http://localhost:3000"
echo.
echo  Home:    http://localhost:3000
echo  Benches: http://localhost:3000/galleries/benches
echo.
echo  Close this window anytime. The server keeps running minimized.
echo  To stop the server later, close the "Parkezza Dev Server" window
echo  or end the Node process on port 3000.
echo.
pause
