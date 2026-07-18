Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Ce\Documents\01ParkezzaCursor\parkezza\public\images\galleries\bollards\p-bollardsz-1light.png"
$destPath = "C:\Users\Ce\Documents\01ParkezzaCursor\parkezza\public\images\categories\bollards-hero.png"

$src = [System.Drawing.Image]::FromFile($srcPath)
Write-Host ("source {0}x{1}" -f $src.Width, $src.Height)

# Match homepage category card ratio 4:3 so the subject aligns with cover photos
$outW = 640
$outH = 480
$out = New-Object System.Drawing.Bitmap($outW, $outH)
$g = [System.Drawing.Graphics]::FromImage($out)
$g.Clear([System.Drawing.Color]::White)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Fit bollard to ~78% of card height; bias upward so it lines up with cover crops
$targetH = [int]($outH * 0.78)
$scale = $targetH / $src.Height
$targetW = [int]($src.Width * $scale)
$dx = [int](($outW - $targetW) / 2)
$topPad = [int]($outH * 0.08)
$g.DrawImage($src, $dx, $topPad, $targetW, $targetH)
$g.Dispose()

$out.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host ("wrote {0}x{1}" -f $out.Width, $out.Height)
$out.Dispose()
$src.Dispose()
