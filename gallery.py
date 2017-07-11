#!/usr/bin/env python

import glob
import os

thumbs = glob.glob("resized/thumbs/*")

index = open('index.html', 'w')

if (os.path.isfile('./template/header.html')):
    index.write(open('./template/header.html').read()) 


index.write("\t\t\t<ul class='gallery ul-gallery'>\n")

for thumb in thumbs:
    full=thumb.replace('thumbs','full')
    title=full.replace("resized/full/","")
    title= title.replace(".jpg","")
    index.write("\t\t\t\t<li><a href='%s'><img src='%s' /></a></li>\n" %(full, thumb))

index.write("\t\t\t</ul>\n")


if (os.path.isfile('./template/footer.html')):
    index.write(open('./template/footer.html').read()) 


