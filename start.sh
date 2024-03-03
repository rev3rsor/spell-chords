#!/bin/bash

if [ -d build ]
then
  rm build/*
else
  mkdir build
fi

cp src/index.html build/index.html
concurrently "node esbuild.js" "http-server build -p 3000 --proxy http://localhost:3000?"