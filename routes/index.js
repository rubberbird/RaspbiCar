var express = require('express');
var router = express.Router();
var child = require('child_process');
var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Move Car Forward    ----------------------------------------

router.post('/forward', function(req, res){
	    var name = req.body.name;
		exec('sudo python /home/pi/projects/servo-control/control-car.py forward', function (error, stdout, stderr) {
			result = stdout.toString().split("\n"); 
			console.log(result);
	    	res.send(result);
	});
});

// Move Car Backward    ----------------------------------------

router.post('/backward', function(req, res){
            var name = req.body.name;
                exec('sudo python /home/pi/projects/servo-control/control-car.py backward', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Move Car Forward Left    ----------------------------------------

router.post('/forward-left', function(req, res){
            var name = req.body.name;
                exec('sudo python /home/pi/projects/servo-control/control-car.py forwardLeft', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Move Car Forward Right    ----------------------------------------

router.post('/forward-right', function(req, res){
            var name = req.body.name;
                exec('sudo python /home/pi/projects/servo-control/control-car.py forwardRight', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Move Car Backward Left    ----------------------------------------

router.post('/backward-left', function(req, res){
            var name = req.body.name;
                exec('sudo python /home/pi/projects/servo-control/control-car.py backwardLeft', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Move Car Backward Right    ----------------------------------------

router.post('/backward-right', function(req, res){
            var name = req.body.name;
                exec('sudo python /home/pi/projects/servo-control/control-car.py backwardRight', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Stop Car    ----------------------------------------

router.post('/stop', function(req, res){
            var name = req.body.name;
                exec('sudo python /home/pi/projects/servo-control/control-car.py stop', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Get Wifi Signal Strength   ----------------------------------------

router.post('/getWifiSignal', function(req, res){
            var name = req.body.name;
                exec("iwconfig wlan0 | grep -i --color quality | awk -F '=' '{print$2}' | awk -F '/' '{print $1}'", function (error, stdout, stderr) {
                        result = stdout.toString();
                        console.log(result);
                res.send(result);
        });
});

module.exports = router;
