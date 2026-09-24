import os, subprocess, imageio_ffmpeg
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

butterfly_dir = 'public/butterfly'
gifs = ['b1.gif', 'b2.gif', 'b3.gif', 'b4.gif', 'b6.gif']

print("=== Converting Butterfly GIFs to Animated WebP ===")
for g in gifs:
    input_gif = os.path.join(butterfly_dir, g)
    output_webp = os.path.join(butterfly_dir, os.path.splitext(g)[0] + '.webp')
    if os.path.exists(input_gif):
        orig_sz = os.path.getsize(input_gif)
        cmd = [
            ffmpeg, '-y',
            '-i', input_gif,
            '-c:v', 'libwebp',
            '-lossless', '0',
            '-q:v', '70',
            '-loop', '0',
            output_webp
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if os.path.exists(output_webp):
            new_sz = os.path.getsize(output_webp)
            print(f"{g}: {orig_sz/1024:.1f} KB -> {new_sz/1024:.1f} KB (saved {(orig_sz-new_sz)/orig_sz*100:.1f}%)")

# Delete redundant copy files to clean up disk and avoid double-fetching
copy_files = [
    'b1 copy.gif', 'b2 copy.gif', 'b3 copy.gif', 'b4 copy.gif', 'b5 copy.png', 'b6 copy.gif'
]
print("\n=== Removing Redundant Copy Files ===")
for cf in copy_files:
    cfp = os.path.join(butterfly_dir, cf)
    if os.path.exists(cfp):
        sz = os.path.getsize(cfp)
        os.remove(cfp)
        print(f"Removed {cf} ({sz/1024:.1f} KB)")
