/**
 * Created by abc on 15/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/sk", function(req, res) {
    var anything={"headers":req}
    res.json(anything);
});

app.get("/skm", function(req, res) {
    var anything={"headers":req}
    res.json(anything);
});

app.post("/sk", function(req, res) {
    req.headers.name ="sunil mondal"
    var anything=req.headers.name;
    res.json(anything);
});

app.listen(3013, function () {
    console.log("server 3013 started");
});
