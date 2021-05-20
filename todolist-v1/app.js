const express= require("express");
const bodyParser= require("body-parser");

const app= express();

app.set('view engine', 'ejs'); // always below express // using of ejs with express module

//our view engine by default will look into view folder

app.get("/",function(req,res)
{

 var today=new Date();
 var currentDay= today.getDay();
 var day="";

  if(currentDay === 6 || currentDay === 0)
  {
      day="Weekend";

   // here we are rending the file list and passing to kindOfDay which is present in list.ejs as day variable
  }
  else
  {
    day="Weekday";
    
  }
  
  res.render("list",{kindOfDay:day}) ;// earlier -res.sendFile(__dirname,"/weekend.html");




});


app.listen(3000,function(){

    console.log("server started");
})