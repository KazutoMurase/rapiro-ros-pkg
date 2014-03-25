include $(shell rospack find mk)/cmake.mk
all: make
clean: myclean
ROS3DJS_URL = "https://github.com/KazutoMurase/ros3djs.git"
make:
	-mkdir -p ./www/lib
	-cd ./www/lib && git clone $(ROS3DJS_URL)

myclean:
	-rm -rf ./www/lib