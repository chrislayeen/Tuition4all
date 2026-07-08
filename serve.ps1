# serve.ps1
# Simple static file HTTP server in PowerShell for Tuition4All
# Listens on port 4002

$port = 4002
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host " Tuition4All Local Server Running" -ForegroundColor Cyan
    Write-Host " URL: http://localhost:$port/" -ForegroundColor Green
    Write-Host " Press Ctrl+C in this terminal to stop" -ForegroundColor Yellow
    Write-Host "==========================================" -ForegroundColor Cyan
} catch {
    Write-Error "Failed to start server on port $port. Is another application running on this port?"
    exit 1
}

$contentTypeMap = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".ico"  = "image/x-icon"
    ".json" = "application/json; charset=utf-8"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }

        # Resolve local path safely
        $decodedPath = [System.Uri]::UnescapeDataString($urlPath)
        $cleanPath = $decodedPath.Replace("/", "\").TrimStart("\")
        $localPath = Join-Path (Get-Item .).FullName $cleanPath

        if (Test-Path $localPath -PathType Leaf) {
            $extension = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = $contentTypeMap[$extension]
            if (-not $contentType) {
                $contentType = "application/octet-stream"
            }
            $response.ContentType = $contentType

            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $bytes.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            Write-Host "$(Get-Date -Format 'HH:mm:ss') 200 OK: $urlPath" -ForegroundColor Gray
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $errBytes.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            }
            Write-Host "$(Get-Date -Format 'HH:mm:ss') 404 Not Found: $urlPath" -ForegroundColor Red
        }
        $response.Close()
    }
} catch {
    # Silence errors from listener termination
    if ($listener.IsListening) {
        Write-Host "Server error: $_" -ForegroundColor Yellow
    }
} finally {
    $listener.Close()
}
