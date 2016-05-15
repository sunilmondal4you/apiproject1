/**
 * Created by abc on 15/05/2016.
 */
/**
 * Created by abc on 15/05/2016.
 */
var express = require("express");

var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/x',function(req, res){
    var reqjason=req.query;
    res.send("Hello"+ reqjason.name);
});

app.get('/y', function(req, res){

    res.send("Hello World.");
});

app.get('/x/y', function(req,res){
    res.send("We Wellcome you.");
});

app.get('/x/y/z',function(req, res){
    res.send("What is your name?");
});

app.get('/name',function(req, res){

    res.send("Where are you from?");
});

app.get('/x/y/z/a/b',function(req, res){
    res.send("What are you doing?");
});

app.post('/x',function(req, res){
    var reqjson = req.body;
    res.send("We wellcome you. :" + reqjson.name + " " + reqjson.email +" "+ reqjson.place + "." );
});

app.post('/y',function(req, res){
    res.send("Thanks for your welcome.");
});

app.post('/sk/:name/:id',function(req, res){
    var name=req.params.name;
    var id=req.params.id;
    res.send("Hello" +" " +name+" "+ "  your Id is " +id);

});

app.post('/hello',function(req, res){
    var output=req.body;
    res.send("output");

});

app.listen(3001, function () {
    console.log("Server has to be started first.");
});