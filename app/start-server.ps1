<#
.SYNOPSIS
    Startet den lokalen HTTP-Server für die Timeline-App.

.DESCRIPTION
    Wechselt ins Skript-Verzeichnis, sucht eine Python-Installation
    (zuerst `python`, dann `py`), startet `http.server` auf dem
    gewünschten Port und öffnet die App bevorzugt in Microsoft Edge,
    mit Fallback auf Google Chrome.

    Mit Strg+C beenden.

.PARAMETER Port
    TCP-Port für den Server. Default: 8033.

.PARAMETER NoBrowser
    Browser nicht automatisch öffnen.

.EXAMPLE
    .\start-server.ps1
    Startet auf Port 8033 und öffnet http://localhost:8033/.

.EXAMPLE
    .\start-server.ps1 -Port 8080 -NoBrowser
    Startet auf Port 8080 ohne Browser-Auto-Start.

.NOTES
    Falls der Aufruf mit "...kann nicht geladen werden, da das Ausführen
    von Skripten auf diesem System deaktiviert ist" abbricht:
        powershell -ExecutionPolicy Bypass -File .\start-server.ps1
#>

[CmdletBinding()]
param(
    [int]$Port = 8033,
    [switch]$NoBrowser
)

# Konsole sauber für Umlaute
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = 'Stop'

# Ins Skript-Verzeichnis wechseln, damit data/folgen.json über relative
# Pfade auflösbar bleibt — egal von wo das Script aufgerufen wird.
Set-Location -LiteralPath $PSScriptRoot

# Python-Befehl ermitteln
function Resolve-PythonCommand {
    foreach ($cmd in @('python', 'py')) {
        $found = Get-Command $cmd -ErrorAction SilentlyContinue
        if ($found) {
            try {
                $version = & $cmd --version 2>&1
                if ($LASTEXITCODE -eq 0) {
                    return [pscustomobject]@{
                        Command = $cmd
                        Version = ($version -join ' ').Trim()
                    }
                }
            } catch {
                continue
            }
        }
    }
    return $null
}

$python = Resolve-PythonCommand
if (-not $python) {
    Write-Host ""
    Write-Host "Kein Python gefunden." -ForegroundColor Red
    Write-Host "Installiere Python (https://www.python.org/) oder verwende eine andere"
    Write-Host "Server-Variante (siehe app/README.md, z.B. 'npx http-server')."
    Write-Host ""
    exit 1
}

# Port-Verfügbarkeit grob prüfen
$portInUse = $false
try {
    $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
    $listener.Start()
    $listener.Stop()
} catch {
    $portInUse = $true
}

if ($portInUse) {
    Write-Host ""
    Write-Host "Port $Port ist bereits belegt." -ForegroundColor Yellow
    Write-Host "Anderen Port wählen: .\start-server.ps1 -Port 8001"
    Write-Host ""
    exit 1
}

$url = "http://localhost:$Port/"

Write-Host ""
Write-Host "Timeline-App – lokaler Server" -ForegroundColor Cyan
Write-Host "  Verzeichnis : $PSScriptRoot"
Write-Host "  Python      : $($python.Version) ($($python.Command))"
Write-Host "  Port        : $Port"
Write-Host "  URL         : $url"
Write-Host ""
Write-Host "Mit Strg+C beenden." -ForegroundColor DarkGray
Write-Host ""

# Browser nach kurzer Verzögerung öffnen — damit der Server bereit ist,
# bevor die Seite geladen wird.
if (-not $NoBrowser) {
    $job = Start-Job -ScriptBlock {
        param($u)
        Start-Sleep -Milliseconds 800
        $candidates = @(
            'msedge.exe',
            'chrome.exe',
            "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
            "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
            "$env:LocalAppData\Microsoft\Edge\Application\msedge.exe",
            "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
            "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
            "$env:LocalAppData\Google\Chrome\Application\chrome.exe"
        ) | Where-Object { $_ }

        foreach ($candidate in $candidates) {
            $cmd = Get-Command $candidate -ErrorAction SilentlyContinue
            $browser = if ($cmd) { $cmd.Source } elseif (Test-Path -LiteralPath $candidate) { $candidate } else { $null }
            if ($browser) {
                Start-Process -FilePath $browser -ArgumentList $u
                return
            }
        }

        Start-Process $u
    } -ArgumentList $url
    # Wir kümmern uns nicht weiter um den Job; er endet von selbst.
    $null = $job
}

# Server starten — blockiert, bis Strg+C
& $python.Command -m http.server $Port
exit $LASTEXITCODE
