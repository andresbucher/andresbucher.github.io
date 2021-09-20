import tkinter as tk 
from tkinter import filedialog 
from PIL import Image
from resizeimage import resizeimage
import glob
import cv2
import os

root = tk.Tk() 
root.withdraw() 
file_path = filedialog.askopenfilename(multiple = True)
print(file_path)
var = root.tk.splitlist(file_path)
filepaths = []
for f in var:
    filepaths.append(f)

images = glob.glob("C:/Users/Andi/OneDrive/Documents/GITHUB/Website/ResizedImg/*.png")
for i in range(len(filepaths)):
    filename = "picture" + str(i)

    with open(filepaths[i], "rb") as file:
        img = Image.open(file)
        imgResult = img.resize((600,450), resample = Image.BILINEAR)
        imgResult.save("C:/Users/Andi/OneDrive/Documents/GITHUB/Website/ResizedImg/" + filename + ".png")
