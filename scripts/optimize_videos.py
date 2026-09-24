import os, subprocess, imageio_ffmpeg
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

def compress_video(src, dst_temp, is_muted=False, scale=None, crf='24'):
    orig_sz = os.path.getsize(src)
    cmd = [
        ffmpeg, '-y',
        '-i', src,
        '-c:v', 'libx264',
        '-crf', crf,
        '-preset', 'fast',
        '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart',
    ]
    if scale:
        cmd.extend(['-vf', f'scale={scale}'])
    if is_muted:
        cmd.extend(['-an'])
    else:
        cmd.extend(['-c:a', 'aac', '-b:a', '96k'])
    cmd.append(dst_temp)
    
    print(f"Compressing {os.path.basename(src)}...")
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if res.returncode != 0:
        print(f"Error compressing {src}:", res.stderr[-500:])
        return False
        
    new_sz = os.path.getsize(dst_temp)
    print(f"  {os.path.basename(src)}: {orig_sz/(1024*1024):.2f} MB -> {new_sz/(1024*1024):.2f} MB (saved {(orig_sz-new_sz)/orig_sz*100:.1f}%)")
    os.replace(dst_temp, src)
    return True

def main():
    print("=== Compressing Background Videos with Faststart ===")
    
    # 1. intro_horizontal.mp4
    compress_video('public/intro/intro_horizontal.mp4', 'public/intro/intro_h_tmp.mp4', is_muted=True, crf='24')
    
    # 2. intro_vertical.mp4
    compress_video('public/intro/intro_vertical.mp4', 'public/intro/intro_v_tmp.mp4', is_muted=True, crf='24')
    
    # 3. inside_horizontal.mp4
    compress_video('public/inside/inside_horizontal.mp4', 'public/inside/inside_h_tmp.mp4', is_muted=True, crf='24')
    
    # 4. inside_vertical.mp4 (scale to 720:1280 for mobile performance and battery efficiency)
    compress_video('public/inside/inside_vertical.mp4', 'public/inside/inside_v_tmp.mp4', is_muted=True, scale='720:1280', crf='24')
    
    print("\n=== Compressing Unused/Root Video Copies if Present ===")
    for vf in ['public/video_landscape.mp4', 'public/video_portrait.mp4', 'public/inside.mp4', 'public/intro.mp4']:
        if os.path.exists(vf):
            tmp = vf + '.tmp.mp4'
            compress_video(vf, tmp, is_muted=True, crf='26')

if __name__ == '__main__':
    main()
