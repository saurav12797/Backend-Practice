const express= require("express");
const bodyParser= require("body-parser");
const request=require("request"); // or use htttps request

const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); // to be able fetch static things like css and image all should be define under public folder

const https=require("https");

app.get("/",function(req,res){

    res.sendFile(__dirname+ "/signup.html");
     
})


app.post("/",function(req,res){

    const firstName=req.body.fname;
    const lastName=req.body.lname;
    const email=req.body.email;


    const data ={
     members: [
       {
        email_address: email,   //email_address is keyword //email is var name
        status: "subscribed",
        merge_fields:
        {
            FNAME:firstName,
            LNAME:lastName
        }
     }
    
     ]
    
    };

    var jsonData= JSON.stringify(data);
  
     //https.get(url,function()) in previus project we did only get request (in API We used)
 
    // this is respnose request as we want this to be send to mailchip (post data to external resouce) 
    //https.request(url,options,function(resonse))

    //format - POST/LISTS/{list id} here it is 83fad5fcd4 
    //list in which we want to subscribe member to

    const url="https:/us1.api.mailchimp.com/3.0/lists/83fad5fcd4";
    const options =
    {
        method:"POST",
        auth: "saurav:179d1d658276825100c80b7699e0ec0b-us1",


    }

   const request= https.request(url,options,function(response)
    {
        response.on("data",function(data)
        {  
            console.log(JSON.parse(data));
        })

    })
    request.write(jsonData);
    request.end();

});

   // console.log(firstName,lastName,email);
    //83fad5fcd4 
  




//now we have to send our data as JSON format to mailchip
//creating javascript object

//MAILCHIP PROPERTIES








/* Request Body parameter of mailchimp 

   members  object type-array listmenber and 

*/
 
app.listen(3000,function() 
{
    console.log("Port running on 3000");
})