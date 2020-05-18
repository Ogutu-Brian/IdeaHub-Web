#!/usr/bin/env bash
echo 'Building IdeaHub...'
yarn build
cp deploy.sh ./build