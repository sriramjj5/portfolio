#!/bin/bash

npm run build
cp -r ./* ../personal-site-github-pages/sriramjj5.github.io
cd ..
cd personal-site-github-pages
cd sriramjj5.github.io
npm run build
mkdir temp 
mv * ./temp/
mv ./temp/dist/* ./
rm -r temp
git add .
git commit --allow-empty -m "$1"
git push origin -f
cd ..
cd ..

# use " . test.sh "Commit message here" " to execute the script 
