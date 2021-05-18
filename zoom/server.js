//ejs helps to get variable from frontend to backend
// uuid wiill generate rndom no. room id which we can assign to diffrerent use

//room is the ejs file


const express= require('express');
const app=express(); //allows to build application

const server= require('http').Server(app);
const  {v4:uuidv4}= require('uuid');  //v4 is version
app.set('view engine','ejs'); //set ejs as defult
app.use(express.static('public')); // set public as default 


 
app.get('/',(req,res)=>{


    res.redirect(`/${uuidv4()}`);  //uuidv4() function generate random roomid
  

//res.status(200).send("helo world"); //This function accepts single parameter code that holds the HTTP status code. and 200 stands for everything os ok


});

app.get('/:room',(req,res)=>{ //uuid is passed in /:room

    res.render('room',{roomId:req.params.room});  //room is rendered to roomid params(parameter) , now we can pass this roomid to room.ejs thats power of ejs sending from node to htmls part
    
    })




server.listen(3000,function(){
    console.log("Server started");
});



