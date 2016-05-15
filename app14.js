/**
 * Created by abc on 15/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a', function(req,res) {
    res.send("Hello");
});

app.get("/sk/:name/:id",function (req,res) {
    var name =req.params.name;
    var id =req.params.id;
    res.send("hello "+ name +" Your id is :"+id);
});

app.post("/sk/:name/:id",function (req,res) {
    var name =req.params.name;
    var id =req.params.id;
    res.send("hello "+ name +" whats'up?"+" Your id is :"+id);
});

app.listen(3014, function () {
    console.log("Server 3014 started");
});