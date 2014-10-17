#!/bin/bash

# allow parent process to exit
sleep 2

git pull origin master

node app.js 3001
