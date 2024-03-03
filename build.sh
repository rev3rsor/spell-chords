#!/bin/bash

if [ -d dist ]
then
  rm dist/*
else
  mkdir dist
fi

cp src/index.html dist/index.html
cp src/favicon.ico dist/favicon.ico
node esbuild.prod.js