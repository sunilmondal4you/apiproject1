var express= require("express");

var app= express();

app.get('/a', function(req, res){
    res.send("Hello World.");
});

app.get('/a/b', function(req,res){
    res.send("We Wellcome you.");
});

app.get('/a/b/c',function(req, res){
    res.send("What is your name?");
});

app.get('/a/b/c/d',function(req, res){
    res.send("Where are you from?");
});

app.get('/a/b/c/d/e',function(req, res){
    res.send("What are you doing?");
});

app.post('/a',function(req, res){
    res.send("Hello you to.");
});

app.post('/a/b',function(req, res){
    res.send("Thanks for your welcome.");
});

app.post('/a/b/c',function(req, res){
    res.send("My name is Sunil.");
});

app.post('/a/b/c/d',function(req, res){
    res.send("I am from West Bengal.");
});

app.post('/a/b/c/d/e',function(req, res){
    res.send("I am doing web designing.");
});

app.listen(3000, function(){
    console.log("Hello, Your Server started");
});

