#!/bin/bash
# Start Camera Streaming
/home/pi/projects/streaming-camera/mjpg-streamer-experimental/camera-start8080.sh

#Start Node JS Wifi Car - nodemon
nodemon /home/pi/projects/nodejs/wifi-car/bin/www
