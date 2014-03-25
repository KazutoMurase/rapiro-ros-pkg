#!/usr/bin/python
import roslib
import rospy
import sys
import os
import time
import datetime
import serial
from std_msgs.msg import *

def callback(msg):
    com = serial.Serial('/dev/ttyAMA0', 57600, timeout = 10)
    com.write("#M" + str(msg.data))

if __name__ == '__main__':
    rospy.init_node('send_commands')
    sub = rospy.Subscriber("rapiro_command", Int32, callback)
    rospy.spin()
