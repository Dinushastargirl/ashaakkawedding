import os, shutil, subprocess, imageio_ffmpeg
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

src_dir = 'asset'
dst_dir = 'public/butterfly'

# Remove old files in public/butterfly
for f in os.listdir(dst_dir):
    fp = os.path.join(dst_dir, f)
    if os.path.isfile(fp):
        os.remove(fp)
        print(f"Removed old asset: {f}")

# Copy new files from asset/
butterflies = ['b1.gif', 'b2.gif', 'b3.gif', 'b4.gif', 'b5.gif', 'b5.png']
for b in butterflies:
    src_fp = os.path.join(src_dir, b)
    dst_fp = os.path.join(dst_dir, b)
    if os.path.exists(src_fp):
        shutil.copy2(src_fp, dst_fp)
        sz = os.path.getsize(dst_fp)
        print(f"Copied {b} -> {sz:,} bytes")
        
        # Also create clean lossless WebP version for modern browsers with 0 artifacts
        if b.endswith('.gif'):
            base = os.path.splitext(b)[0]
            webp_fp = os.path.join(dst_dir, f"{base}.webp")
            cmd = [
                ffmpeg, '-y',
                '-i', dst_fp,
                '-c:v', 'libwebp',
                '-lossless', '1',  # 100% lossless: ZERO color bleeding, pure transparency
                webp_fp
            ]
            subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            if os.path.exists(webp_fp):
                wsz = os.path.getsize(webp_fp)
                print(f"  Lossless WebP {base}.webp: {wsz:,} bytes")
