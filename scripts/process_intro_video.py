import os, sys, subprocess, imageio_ffmpeg
from PIL import Image

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
src = 'asset/INTRO/introvideo new.mp4'

print(f"Source: {src}, Size: {os.path.getsize(src)/(1024*1024):.2f} MB")
sys.stdout.flush()

# 1. First frame poster extraction
print("1. Extracting poster frame at 0.0s...")
sys.stdout.flush()
poster_raw = 'temp_intro/poster_raw.png'
os.makedirs('temp_intro', exist_ok=True)
cmd_poster = [
    ffmpeg, '-nostdin', '-y',
    '-ss', '0.0',
    '-i', src,
    '-vframes', '1',
    '-update', '1',
    poster_raw
]
subprocess.run(cmd_poster, check=True, stdin=subprocess.DEVNULL)

with Image.open(poster_raw) as img:
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Save vertical posters (quality 80 for sub-70KB instant paint)
    img.save('public/intro/intro_vertical_poster.webp', 'WEBP', quality=80)
    img.save('public/intro/intro_vertical_poster.jpg', 'JPEG', quality=80, optimize=True)
    
    # Save horizontal posters
    img.save('public/intro/intro_horizontal_poster.webp', 'WEBP', quality=80)
    img.save('public/intro/intro_horizontal_poster.jpg', 'JPEG', quality=80, optimize=True)

print("Posters generated successfully!")
sys.stdout.flush()

# 2. Encode public/intro/intro_vertical.mp4
print("2. Encoding public/intro/intro_vertical.mp4 (1080x1920, CRF 26, 2000k maxrate, faststart)...")
sys.stdout.flush()
cmd_v = [
    ffmpeg, '-nostdin', '-y',
    '-i', src,
    '-vf', 'scale=1080:1920',
    '-c:v', 'libx264',
    '-crf', '26',
    '-preset', 'veryfast',
    '-maxrate', '2000k',
    '-bufsize', '3500k',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    '-an',
    'public/intro/intro_vertical.mp4'
]
subprocess.run(cmd_v, check=True, stdin=subprocess.DEVNULL)
print(f"intro_vertical.mp4 done! Size: {os.path.getsize('public/intro/intro_vertical.mp4')/(1024*1024):.2f} MB")
sys.stdout.flush()

# 3. For horizontal viewports, we can use the same optimized file (copy to save encode time and exact consistency)
print("3. Syncing public/intro/intro_horizontal.mp4...")
sys.stdout.flush()
import shutil
shutil.copyfile('public/intro/intro_vertical.mp4', 'public/intro/intro_horizontal.mp4')
print(f"intro_horizontal.mp4 done! Size: {os.path.getsize('public/intro/intro_horizontal.mp4')/(1024*1024):.2f} MB")
sys.stdout.flush()

print("All intro assets generated and optimized successfully!")
