const express= require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{
    res.send("hello saurav");
})

app.listen(3000,function()
{
    console.log("Server Started");
})



