//ejs helps to get variable from frontend to backend


const express= require('express');
const app=express(); //allows to build application

const server= require('http').Server(app);
app.set('view engine','ejs'); //set ejs as defult
 
app.get('/',(req,res)=>{


res.render('room'); //just render the room file




   

//res.status(200).send("helo world"); //This function accepts single parameter code that holds the HTTP status code. and 200 stands for everything os ok


})




server.listen(3000,function(){
    console.log("Server started");
});



