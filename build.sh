#!/usr/bin/env bash
echo 'Building IdeaHub...'
rm -rf build
yarn build
cp deploy.sh ./build