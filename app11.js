var express= require("express");

var app= express();

app.get('/a', function(req,res) {
    res.send("Hello");
});

app.get('/b', function(req,res) {
    var name=req.query.name;
    var email=req.query.emqil;
    res.send("Hello "+name);
});

app.get('/c', function(req,res) {
    var name={"bol":req.query.name}
    var email=req.query.emqil;
    res.send(name);
});

app.get('/user', function(req,res){
   var atom= { "name":req.query.name,
       "email":req.query.email}
    res.json(atom);
})

app.listen(3011,function(){
    console.log("server 3011 is started");
});