const express= require("express");

const https=require("https");

const app = express();

app.get("/",function(req,res)
{
    const url="https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=a254af5db767af45f14e8a85fa53c6e6&units=metric";

    https.get(url,function(response)   //https.get(url,call backfunction) CALL BACK FUNCTION GIVES THE RESPONSE
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

         /*  const icon=WeatherData.weather[0].icon;

          const imageURL="http://openweathermap.org/img/wn/"+ icon +"@2x.png";

          res.write("<img src="+ imageURL+">"); */

           res.write(`<h1>Temperature of ${name} is ${temp} degree<h1>`);
           res.write(`<h2>The wind is blowing at speed of ${speed} and humidity is ${humidity} <h2>`);
           res.send();
          

          

           

          //or

        // res.write("humidity is "+humidity)
        //res.write("speed is"+ speed)
        



         //console.log(WeatherData);

         //OR using OBJECTS
/* 
            const object={
              name:"saurav", 
              fav_food:"pizza"

            }
            console.log(JSON.stringify(object)); //converting into single string JSON FILE */




       })
    })
})


app.listen(3000,function()
{
    console.log("Port 3000 Server Started")
})
