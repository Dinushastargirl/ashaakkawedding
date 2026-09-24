import os
from PIL import Image

def optimize_image(input_path, max_width=None, quality=82):
    orig_size = os.path.getsize(input_path)
    base, ext = os.path.splitext(input_path)
    webp_path = base + '.webp'
    
    with Image.open(input_path) as img:
        # Convert RGBA to RGB for JPEG if needed
        if img.mode in ('RGBA', 'LA') and ext.lower() in ('.jpg', '.jpeg'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1])
            img = background
        elif img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGB')
            
        # Resize if max_width is specified and image is larger
        if max_width and img.width > max_width:
            ratio = max_width / float(img.width)
            new_height = int(float(img.height) * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Save WebP version
        img.save(webp_path, 'WEBP', quality=quality, method=6)
        webp_size = os.path.getsize(webp_path)
        
        # Save optimized JPEG version (replacing original or writing compressed)
        temp_jpg = base + '_opt' + ext
        if img.mode == 'RGBA':
            img_rgb = Image.new('RGB', img.size, (255, 255, 255))
            img_rgb.paste(img, mask=img.split()[-1])
            img_rgb.save(temp_jpg, 'JPEG', quality=quality, optimize=True, progressive=True)
        else:
            img.save(temp_jpg, 'JPEG', quality=quality, optimize=True, progressive=True)
            
        opt_jpg_size = os.path.getsize(temp_jpg)
        
        # Replace original with optimized JPEG
        os.replace(temp_jpg, input_path)
        final_jpg_size = os.path.getsize(input_path)
        
        print(f"{os.path.basename(input_path)}:")
        print(f"  Orig JPEG: {orig_size/1024:.1f} KB")
        print(f"  Opt  JPEG: {final_jpg_size/1024:.1f} KB (saved {(orig_size-final_jpg_size)/orig_size*100:.1f}%)")
        print(f"  WebP:      {webp_size/1024:.1f} KB (saved {(orig_size-webp_size)/orig_size*100:.1f}%)")

def main():
    print("=== Optimizing Gallery Photos (2752px -> 1600px Max, WebP + Compressed JPEG) ===")
    photos_dir = 'public/photos'
    for f in os.listdir(photos_dir):
        if f.lower().endswith(('.jpg', '.jpeg')):
            optimize_image(os.path.join(photos_dir, f), max_width=1600, quality=82)
            
    print("\n=== Optimizing Section Images (Ceremony, Flowers, Rings, Couple) ===")
    root_images = ['ceremony_chapel.jpg', 'couple.jpg', 'flowers.jpg', 'rings.jpg']
    for f in root_images:
        fp = os.path.join('public', f)
        if os.path.exists(fp):
            optimize_image(fp, max_width=1400, quality=82)
            
    print("\n=== Optimizing Video Posters (Intro & Inside Posters) ===")
    posters = [
        'public/intro/intro_horizontal_poster.jpg',
        'public/intro/intro_vertical_poster.jpg',
        'public/inside/inside_horizontal_poster.jpg',
        'public/inside/inside_vertical_poster.jpg',
    ]
    for fp in posters:
        if os.path.exists(fp):
            optimize_image(fp, max_width=1400, quality=80)

if __name__ == '__main__':
    main()
