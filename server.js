var express = require("express");
var exphbs = require("express-handlebars");
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var bodpars = require("body-parser");
var app = express();

app.use(bodpars.urlEndcoded({extended: false}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/articlehwdb');
var db= mongoose.connection;

db.on('error', function(err){
	console.log('Mongoose Error: ' + err);
});