const express= require("express");

const https=require("https");

const app = express();

app.get("/",function(req,res)

{

  const query="Delhi";
  const units="metric";
    const apiKey="a254af5db767af45f14e8a85fa53c6e6";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;

    https.get(url,function(response)   //https.get(url,call backfunction) CALL BACK FUNCTION G IVES THE RESPONSE
    {
         
      console.log(response.statusCode) ;//status code gives error to identify like 200- ok  404 - sever not found 


      //this  response is from others server to my server 

       response.on("data",function(data){
         const WeatherData=JSON.parse(data); // covert hexa decimat data  comming from weather app to JSON format

        //now to get only temperature out of weather data -->
        const temp=WeatherData.main.temp;
          const humidity=WeatherData.main.humidity;
          const  speed=WeatherData.wind.speed;
          const  name=WeatherData.name;
          

           res.write(`<h1>Temperature of ${name} is ${temp} degree<h1>`);
           res.write(`<h2>The wind is blowing at speed of ${speed} and humidity is ${humidity} <h2>`);
           res.send();
          

      
       })
    })
})


app.listen(3000,function()
{
    console.log("Port 3000 Server Started")
})
