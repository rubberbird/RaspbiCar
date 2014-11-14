RaspbiCar
=========

Summary:

Node JS application that allows the user to control an wifi controlled car.

Prepreq:

- Nodejs application - Express/ HJS support/ LESS for Styling.
- Raspberry PI
- Python Scripts for servo control - included
- Raspberry Pi Camera Board
- MJPG streamer application - link provided soon
- Wifi Car - Schematics provided if required.

Features:

- Calls Python Scripts for GPIO based servo/DC motor control
- Calls iwconfig and AWK's to provide signal strength and outputs to JSON for Jquery Knob display.
- Streams MJPG-streamer based camera as a background and to allow the user first person view of the car

Note:

This is still very much a work in progress and I will update code as I go along, currently it works, but it's flaky.

Image of WIFI Car

![alt tag](https://raw.githubusercontent.com/rubberbird/RaspbiCar/master/public/images/wificar.jpg)

