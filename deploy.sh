#!/usr/bin/env bash
echo 'Deploying IdeaHub...'
cp -r * /var/www/ideahubweb
sudo service nginx restart