@echo off
rem Startet den lokalen Server der Timeline-App in einem eigenen Fenster.
rem Argumente werden an start-server.ps1 durchgereicht, z.B.:
rem   start-server.bat -Port 8080 -NoBrowser
rem Beenden mit stop-server.bat (oder Strg+C im Server-Fenster).

start "Timeline-App Server" powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-server.ps1" %*
