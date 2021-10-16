#!/bin/bash
# Rather than compiling the types which end up taking a lot of time, we do this trick
# where we copy the src file as the type file (since they look the same in the end).
#
# 1- Make the dist directory if it doesnt exist
# 2- cp all the files from src into dist, because the typings look the same
# 3- Rename all .tsx files in dist to .d.ts
mkdir ./lib
cp ./src/* ./lib

for file in ./lib/*.ts; do
    mv "$file" "./lib/$(basename "$file" .ts).d.ts"
done

