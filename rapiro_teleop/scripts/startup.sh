#!/bin/sh
mkdir /tmp/pistill
cd `rospack find rapiro_teleop`/mjpg-streamer/mjpg-streamer
raspistill -w 320 -h 240 -q 5 -o /tmp/pistill/pic.jpg -tl 500 -t 9999999 -th 0:0:0 & sudo ./mjpg_streamer -i "./input_file.so -f /tmp/pistill -n pic.jpg" -o "./output_http.so ./www -p 8080"
