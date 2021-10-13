const express= require("express");                  //to use external modules
const ejs=require("ejs");                           //to use external modules
const app= express();                               //instantiates Express and assigns app variable to it

app.use(express.static("public"));                  //serve static files such as images,CSS,JavaScript
app.set('view engine','ejs');                       //template engine to use static template files

app.use(express.urlencoded({ extended: true }));    //an inbuilt method to recognize the incoming Request Object as strings or arrays
app.use(express.json());                            //an inbuilt method to recognize the incoming Request Object as a JSON Object

var topic;

app.get("/",function(req,res){
    res.render("topic");                            //rendering topic.ejs at root route
        
});

app.get("/timer",function(req,res){

    res.render("timer",{topic:topic});              //rendering timer.ejs at main route
});


app.post("/",function(req,res){                     //post request to root route in

    topic=req.body.topic;                           //in order to get topic of search from user
    
    res.redirect("/timer");

});

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
    console.log("Server started.......");
});

