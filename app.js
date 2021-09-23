const express= require("express");
const ejs=require("ejs");
const app= express();

app.use(express.static("public"));
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var topic;

app.get("/",function(req,res){
    res.render("topic");
        
});

app.get("/timer",function(req,res){

    res.render("timer",{topic:topic});
});


app.post("/",function(req,res){

    topic=req.body.topic;
    
    res.redirect("/timer");

});


app.listen(3000);