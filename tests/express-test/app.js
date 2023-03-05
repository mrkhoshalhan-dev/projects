const express = require("express");
const _ = require("lodash")
const ejs = require("ejs")
const bodyParser = require("body-parser")

const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("hello")
})


app.listen(3000,()=>{
    console.log("app started on port 3000")
})
