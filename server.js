// ========================= always first
var express = require("express");
var session = require('express-session');
var path = require('path');
// ========== invoke app - always second
var app = express();

// ========== setting up ejs and our views folder
// set and get the content here... ?
app.use(session({secret: 'codingdojorocks'})); 
// app.use(express.static(__dirname + "/static"));
// This sets the location where express will look for the ejs views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ==================== all routes here
app.get('/counter', function(request, response) {
    if(request.session.counter){
        request.session.counter++;
        // response.render('counter');
        response.render('count', {count: request.session.counter})
        // response.send("<p>You visited this page " + request.session.counter + " times</p>");
    }else{
        request.session.counter = 1;
        response.render('count');
        response.send("Welcome to this page for the first time!");
    }
  })

// ==================== listen is the last part
app.listen(8000, function() {
    console.log("listening on port 8000");
  })
