var websocketURL = 
    'ws' +
    '://' +
    location.hostname +
    ':' +
    '9090';
function init() {
    // Connect to ROS.
    var ros = new ROSLIB.Ros({
      url : websocketURL
    });

    command_pub = new ROSLIB.Topic({
	ros: ros,
	name: '/rapiro_command',
	messageType: 'std_msgs/Int32'
    });

    $("button#stop").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 0
	});
	command_pub.publish(command_msg);
    });


    $("button#move_forward").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 1
	});
	command_pub.publish(command_msg);
    });

    $("button#move_backward").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 2
	});
	command_pub.publish(command_msg);
    });

    $("button#turn_left").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 3
	});
	command_pub.publish(command_msg);
    });

    $("button#turn_right").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 4
	});
	command_pub.publish(command_msg);
    });

    $("button#hello").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 5
	});
	command_pub.publish(command_msg);
    });

    $("button#goodbye").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 6
	});
	command_pub.publish(command_msg);
    });

    $("button#happy").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 7
	});
	command_pub.publish(command_msg);
    });

    $("button#cheer").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 8
	});
	command_pub.publish(command_msg);
    });

    $("button#shake_hands").click(function() {
	var command_msg = new ROSLIB.Message({
	    data: 9
	});
	command_pub.publish(command_msg);
    });

    $.getScript("./jquery-mobile/jquery.mobile-1.3.2.min.js");

    $("img#stream").attr("src", "http://133.11.216.233:8080/?action=stream");

}

