const express= require("express");
const bodyParser=require("body-parser"); // we use to 

const app= express();
app.use(bodyParser.urlencoded({ extended: false }))  // with body parser we are able parse the http request and by using urlencoded we get access to body data


app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});
 

app.post("/",function(req,res)  // to handle post data after submisson which comes to "/"home route
{
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1+num2;
    res.send("Your sum of number is "+ result );
});



app.listen(3000,function()
{
    console.log("running on port 3000");
}
);