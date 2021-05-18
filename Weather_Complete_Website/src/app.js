const express= require('express');
const path=require('path'); // get path
const app= express();  // through app we will excess express
const port= process.env.PORT || 3000; // process env is when we host our website it will take their port as default as 3000 is local port
  
const static_path= path.join(__dirname,"../public") //path to connect static page

app.use(express.static(static_path)); // this will execute first as cronology order not app.get one



// app.use(express.static());





app.get("/",(req,res)=> {

    res.send("Welcome to my channel")  ;      // express syntax in node we write res.add

})

app.get("money",(req,res)=> {

    res.send("Welcome to my channel")  ;      // express syntax in node we write res.add

})

app.get("/about",(req,res)=> {

    res.send("Welcome to  about page")        

})


app.get("/weather",(req,res)=> {

    res.send("Welcome to weather page")        

})

app.get("*",(req,res)=> {   // * runs if about get method doesnt run

    res.send("OOPS !!! ERROR HAS OCCURED 404 NOT FOUND")        

})








app.listen(port,()=>{

   console.log(`Server Running in Port ${port}`) 
})