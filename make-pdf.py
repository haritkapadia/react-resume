#!/bin/env python

from subprocess import run
from tempfile import TemporaryDirectory
from os import path
import mmap
from decimal import Decimal
from argparse import ArgumentParser
from sys import exit, stderr

def pdftk(infile, outfile, *args):
    run(["pdftk", infile, "output", outfile, *args], check=True)


parser = ArgumentParser("Creates a PDF from running server.")
parser.add_argument("--server", "-s", default="http://localhost:3000")
parser.add_argument("--override", "-o", action="store_true")
parser.add_argument("filename")
args = parser.parse_args()

if path.exists(args.filename):
    if path.isdir(args.filename):
        print(f"{args.filename} is a directory.", file=stderr)
        exit(1)
    if not args.override:
        print(f"{args.filename} already exists, pass '-o' to override.")
        exit(1)


with TemporaryDirectory() as tmpdir:
    first_file = path.join(tmpdir, "0.pdf")
    run(["google-chrome-stable", f"--print-to-pdf={first_file}", args.server, "--headless"], check=True)
    pdftk(first_file, path.join(tmpdir, "1.pdf"), "uncompress")
    with open(path.join(tmpdir, "1.pdf"), "rb") as orig, open(path.join(tmpdir, "2.pdf"), "wb") as bounded:
        s = mmap.mmap(orig.fileno(), 0, access=mmap.ACCESS_READ)
        x = s.find(b"/MediaBox ")
        if x != -1:
            bounded.write(orig.read(x))
            mediabox = orig.readline()
            mediadata = mediabox[len(b"/MediaBox [") : -len("]\n")].split(b" ")
            print(mediabox, mediadata)
            left, top, width, height = (Decimal(b.decode()) for b in mediadata)
            bounded.write(b"/MediaBox [")
            bounded.write(str(left).encode())
            bounded.write(b" ")
            bounded.write(str(height - 792).encode())
            bounded.write(b" ")
            bounded.write(str(612).encode())
            bounded.write(b" ")
            bounded.write(str(height).encode())
            bounded.write(b"]\n")
            bounded.write(orig.read())
    pdftk(path.join(tmpdir, "2.pdf"), args.filename, "compress")
