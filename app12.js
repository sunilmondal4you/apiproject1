/**
 * Created by abc on 15/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/a', function(req,res) {
    res.send("Hello");
});

app.post('/b', function(req, res) {
    res.send(req.body);
});

app.post('/hello',function(req, res){
    var output=req.body;
    res.send("output");

});

app.listen(3012,function(){
    console.log("server 3012 is started");
});