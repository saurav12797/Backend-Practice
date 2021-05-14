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

    var h= Number(req.body.height);
    var w=Number(req.body.weight);
       
    var bmi=w/(h*h);
    bmi=bmi.toFixed(2);
    res.send("Your bmi value is"+bmi);
    
})

app.listen(3000,function()
{
    console.log("Server Started");
})



