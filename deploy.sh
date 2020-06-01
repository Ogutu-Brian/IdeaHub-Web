#!/usr/bin/env bash
echo 'Removing existing dependencies...'
rm -rf node_modules/
echo 'Installing dependencies...'
yarn install
echo 'Building IdeaHub...'
rm -rf build
yarn build
cp deploy.sh ./build
cd ./build
echo 'Deploying IdeaHub...'
cp -r * /var/www/ideahubweb
sudo service nginx restart