var PORT = process.env.PORT || 4020;

var express = require('express');

var bodyParser = require("body-parser");

var app = express();

var http = require('http').Server(app);

var loginController = require('./controllers/loginController.js');

var signupController = require('./controllers/signupController.js');

//console.log(db.connection);

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({

    extended: true
    
}));

app.post('/login',loginController.login);

app.post('/signup',signupController.signup);

http.listen(PORT,function(){

	console.log("Server Started !");
});