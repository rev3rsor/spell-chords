#!/bin/bash

if [ -d dist ]
then
  rm dist/*
else
  mkdir dist
fi

cp src/index.html dist/index.html
node esbuild.prod.js