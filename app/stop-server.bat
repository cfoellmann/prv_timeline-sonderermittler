@echo off
rem Beendet den lokalen Server der Timeline-App.
rem Optional den Port angeben (Default 8033):
rem   stop-server.bat 8080

setlocal
set "PORT=%~1"
if "%PORT%"=="" set "PORT=8033"

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
  "$pids = Get-NetTCPConnection -LocalPort %PORT% -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique;" ^
  "if (-not $pids) { Write-Host 'Kein Server auf Port %PORT% gefunden.'; exit 1 }" ^
  "foreach ($p in $pids) { $proc = Get-Process -Id $p -ErrorAction SilentlyContinue; Stop-Process -Id $p -Force; Write-Host ('Server auf Port %PORT% beendet (PID ' + $p + ', ' + $proc.ProcessName + ').') }"
endlocal
