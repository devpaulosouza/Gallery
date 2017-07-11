#!usr/bin/env python

try:
    file = open("./template/header.txt", "r");
    
    s = file.read();

    print(s);

except Exception:
    pass;
