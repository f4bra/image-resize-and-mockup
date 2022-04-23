from PIL import Image, ImageDraw, ImageFont
import re, math, zipfile

img = Image.open("Barcelona Spain.jpg")
d = ImageDraw.Draw(img) 
# Original Image Ratio
r = math.gcd(img.size[0], img.size[1])
x = int(img.size[0] / r)
y = int(img.size[1]/ r)

fntTitle = ImageFont.truetype("./Montserrat-Regular.ttf", 200)
fntSubtitle = ImageFont.truetype("./Montserrat-Light.ttf", 150)
name = img.filename
titleL = re.split("\W+", name)[0]
title = re.split("\W+", name)[0].upper()
subtitleL = re.split("\W+", name)[1]
subtitle = re.split("\W+", name)[1].upper()

print("\nPlace:      ",title)
print("Country:    ",subtitle)
print("Image Size: ",img.size)
print("Ratio:      ",x,":",y,"\n")

def processImage (factor, ratio):
    # Crop applying factor
    scaledHeight = int(img.size[1] * factor)
    print("Scaled Height", ratio, "-", scaledHeight)
    imgCropped = img.crop((0, 0, img.size[0], scaledHeight))
    # Add Title and Subtitle
    d = ImageDraw.Draw(imgCropped) 
    w, h = d.textsize(title , font=fntTitle)
    ww, hh = d.textsize(subtitle , font=fntSubtitle)
    d.text((((imgCropped.size[0]-w)/2), (imgCropped.size[1]/10)), title, font=fntTitle, fill=(51, 51, 51))
    d.text(((imgCropped.size[0]-ww)/2, imgCropped.size[1]/8), subtitle, font=fntSubtitle, fill=(50, 50, 50)) 
    imgCropped.save(titleL + " " + subtitleL + " " + ratio + ".jpg") 

# 2:3  3:4  4:5  5:7(ISO)  11:14
processImage(1, "2x3")
processImage(0.8888888889, "3x4")
processImage(0.8333333333, "4x5")
processImage(0.9334150327, "5x7")
processImage(0.8484477124, "11x14")

# Generate Zip File
maxSize = 20000000 # Bytes
handle = zipfile.ZipFile(name + ".zip", 'w')
handle.write(titleL + " " + subtitleL + " " + "2x3" + ".jpg", compress_type=zipfile.ZIP_DEFLATED)
handle.write(titleL + " " + subtitleL + " " + "3x4" + ".jpg", compress_type=zipfile.ZIP_DEFLATED)
handle.write(titleL + " " + subtitleL + " " + "4x5" + ".jpg", compress_type=zipfile.ZIP_DEFLATED)
handle.write(titleL + " " + subtitleL + " " + "5x7" + ".jpg", compress_type=zipfile.ZIP_DEFLATED)
handle.write(titleL + " " + subtitleL + " " + "11x14" + ".jpg", compress_type=zipfile.ZIP_DEFLATED)
handle.close()