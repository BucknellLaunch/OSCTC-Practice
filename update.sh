#!/bin/bash

# allow parent process to exit
sleep 2

echo "Pulling from GitHub..."
git pull origin master


echo "Relaunching application"
node app.js 3001
