#!/usr/bin/env bash
echo 'Deploying IdeaHub...'
rm -rf build
cp -r * /var/www/ideahubweb
sudo service nginx restart