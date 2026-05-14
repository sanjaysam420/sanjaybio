from PIL import Image, ImageDraw
import os

# Create public directory if it doesn't exist
os.makedirs('./public', exist_ok=True)

# Color scheme matching your portfolio
bg_color = (22, 35, 84)  # #162354
accent_color = (255, 182, 0)  # Gold/yellow accent

# Create 192x192 icon
img_192 = Image.new('RGB', (192, 192), bg_color)
draw_192 = ImageDraw.Draw(img_192)

# Draw a simple "S" for Sanjay
# Circle background
draw_192.ellipse([30, 30, 162, 162], fill=accent_color)
# Add "S" text using default font
draw_192.text((85, 75), "S", fill=bg_color, font=None)

img_192.save('./public/pwa-192x192.png')
print("Created pwa-192x192.png")

# Create 512x512 icon
img_512 = Image.new('RGB', (512, 512), bg_color)
draw_512 = ImageDraw.Draw(img_512)

# Draw a larger circle background
draw_512.ellipse([80, 80, 432, 432], fill=accent_color)
# Add "S" text
draw_512.text((220, 200), "S", fill=bg_color, font=None)

img_512.save('./public/pwa-512x512.png')
print("Created pwa-512x512.png")

# Create apple-touch-icon (180x180)
img_apple = Image.new('RGB', (180, 180), bg_color)
draw_apple = ImageDraw.Draw(img_apple)

# Draw circle background
draw_apple.ellipse([25, 25, 155, 155], fill=accent_color)
# Add "S" text
draw_apple.text((75, 65), "S", fill=bg_color, font=None)

img_apple.save('./public/apple-touch-icon.png')
print("Created apple-touch-icon.png")

print("All PWA icons created successfully!")
