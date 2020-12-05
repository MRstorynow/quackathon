// Modules
var express = require('express');
var path = require('path'); 
var app = express();
const DBControl = require('./DBControl');
const bodyParser = require('body-parser');
const Utils = require('./Utilities');

// Settings
const port = 3000
var userID = 0
// random stuff that helps the server accept methods from client
app.use(express.static('public'));  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

//app.get listens to get requests, which is like when you go to google.com you do a get request for their page
//so this listens to get requests to localhost:8000 and will execute this function if someone goes there
// this is what executes when you go to localhost:3000, just defaults to the html file

// screen managers
app.get('/', function(req, res){ 
    var options = { 
        root: path.join(__dirname) 
    }; 
    var fileName = 'index.html';  // this is the default page
    res.sendFile(fileName, options, function (err) { 
        if (err) { 
            next(err); 
        } else { 
            console.log('File: ', fileName, ' has been sent'); 
        } 
    }); 
}); 



// get/post requests

app.post('/dick', function (req, res) { 
    const body = req.body; // this is the parameters sent from client
    console.log(body.key) // this is what client sent
    res.send("Doggy") // this is what we send client
});

var server = app.listen(port, function () { // starts the server on the localhost/port
   var host = server.address().address
   var port = server.address().port
   
   console.log("Citzen United Bank listening at http://%s:%s", host, port)
})
