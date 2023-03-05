// npm init
// npm i express body-parser ejs lodash

//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser");
const request = require("request");
const _ = require("lodash");

const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");  // create dir views to store ejs views


app.get("/",function(req,res){
    res.send("Hello World!")
    res.render(page,{var1:val1})
})

//rest of the app

app.listen(3000,function(){
    console.log("App started on port 3000")
    
})
