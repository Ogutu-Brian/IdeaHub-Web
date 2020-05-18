#!/usr/bin/env bash
echo 'Building IdeaHub...'
rm -rf build
yarn build
cp deploy.sh ./build
cd ./build
echo 'Deploying IdeaHub...'
cp -r * /var/www/ideahubweb
sudo service nginx restart