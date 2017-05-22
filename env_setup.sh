#!/bin/sh -e

echo "Configuring the container"
# Put in config steps here

echo "Starting Web Server"
nginx -g 'daemon off;'
