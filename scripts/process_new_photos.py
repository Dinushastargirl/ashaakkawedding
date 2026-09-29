import os
from PIL import Image, ImageOps

src_dir = 'asset/photos'
dst_dir = 'public/photos'

# Clean up old deleted photos from public/photos
old_files = [
    'Couple_embracing_in_romantic_gaze_2K_20260923125436.jpeg',
    'Couple_embracing_in_romantic_gaze_2K_20260923125436.webp',
    'Couple_holding_hands_on_balcony_2K_20260923124157.jpeg',
    'Couple_holding_hands_on_balcony_2K_20260923124157.webp',
    'Couple_standing_in_grass_2K_20260923124146.jpeg',
    'Couple_standing_in_grass_2K_20260923124146.webp',
    'Couple_standing_in_stone_archway_2K_20260923125401.jpeg',
    'Couple_standing_in_stone_archway_2K_20260923125401.webp',
]
for of in old_files:
    fp = os.path.join(dst_dir, of)
    if os.path.exists(fp):
        os.remove(fp)
        print(f"Removed old photo: {of}")

# Process each new photo in asset/photos
photos = sorted([f for f in os.listdir(src_dir) if f.startswith('0U5A') and f.lower().endswith(('.jpg', '.jpeg', '.png'))])

# Custom crops (left, upper, right, lower) to zoom in on the couple and show them in full size
# Photo 1 (0U5A4855) is kept as reference (uncropped 3:2 landscape)
CROPS = {
    '0U5A4855': None,                             # Reference landscape 3:2
    '0U5A5059': (1200, 4800, 3280, 6650),         # Road scene: zoomed in close-up on couple walking
    '0U5A5096': (515, 1600, 3965, 6200),          # Embracing portrait: full-body 3:4 tall
    '0U5A5193': (400, 1600, 4080, 6450),          # Walking portrait: full-body 3:4 tall
    '0U5A5286': (1200, 1500, 5700, 4450),         # Paddy field landscape: zoomed in 3:2 wide
}

for f in photos:
    src_fp = os.path.join(src_dir, f)
    base_name = os.path.splitext(f)[0]
    
    orig_sz = os.path.getsize(src_fp)
    
    with Image.open(src_fp) as img:
        # Correctly apply EXIF orientation
        img = ImageOps.exif_transpose(img)
        
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
            
        # Apply custom zoom crop if defined
        if base_name in CROPS and CROPS[base_name] is not None:
            img = img.crop(CROPS[base_name])
            
        # Target 1600px maximum dimension for ultra-sharp 2x retina display without huge payload
        max_dim = 1600
        w, h = img.size
        if max(w, h) > max_dim:
            if w >= h:
                new_w = max_dim
                new_h = int(h * (max_dim / float(w)))
            else:
                new_h = max_dim
                new_w = int(w * (max_dim / float(h)))
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
        dst_webp = os.path.join(dst_dir, f"{base_name}.webp")
        dst_jpg = os.path.join(dst_dir, f"{base_name}.jpg")
        
        # Save WebP version
        img.save(dst_webp, 'WEBP', quality=85, method=6)
        webp_sz = os.path.getsize(dst_webp)
        
        # Save progressive optimized JPEG fallback
        img.save(dst_jpg, 'JPEG', quality=84, optimize=True, progressive=True)
        jpg_sz = os.path.getsize(dst_jpg)
        
        print(f"\n{f}:")
        print(f"  Dimensions: {img.size[0]}x{img.size[1]}")
        print(f"  Original:   {orig_sz/1024/1024:.2f} MB")
        print(f"  WebP:       {webp_sz/1024:.1f} KB (saved {(orig_sz-webp_sz)/orig_sz*100:.1f}%)")
        print(f"  JPG:        {jpg_sz/1024:.1f} KB (saved {(orig_sz-jpg_sz)/orig_sz*100:.1f}%)")

# Generate Social Share (Open Graph / WhatsApp / Facebook / Twitter preview) from couple_road.jpg
share_src = os.path.join(src_dir, 'couple_road.jpg')
if os.path.exists(share_src):
    with Image.open(share_src) as s_img:
        s_img = ImageOps.exif_transpose(s_img)
        if s_img.mode != 'RGB':
            s_img = s_img.convert('RGB')
        s_img.save('public/couple.jpg', 'JPEG', quality=90, optimize=True, progressive=True)
        s_img.save('public/couple.webp', 'WEBP', quality=88, method=6)
        print("\nCreated public/couple.jpg and public/couple.webp for social sharing")

