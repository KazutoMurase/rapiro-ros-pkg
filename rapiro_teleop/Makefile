include $(shell rospack find mk)/cmake.mk
all: make
clean: myclean
ROS3DJS_URL = "https://github.com/KazutoMurase/ros3djs.git"
MJPG_STREAMER_URL = "http://svn.code.sf.net/p/mjpg-streamer/code/"
make:
	-mkdir -p ./www/lib
	-cd ./www/lib && git clone $(ROS3DJS_URL)
	-svn co $(MJPG_STREAMER_URL) mjpg-streamer
	-cd ./mjpg-streamer/mjpg-streamer && make

myclean:
	-rm -rf ./www/lib