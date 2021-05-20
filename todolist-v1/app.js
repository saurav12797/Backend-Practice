const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs"); // always below express // using of ejs with express module
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


var items=["Coding Practice"]; //declaring globl because app.get has to access outside app.post . Everytime new item will be added

//our view engine by default will look into view folder

app.get("/", function (req, res) {
  var today = new Date();

  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };

  var day= today.toLocaleDateString("en-US",options);
  
  res.render("list", { kindOfDay: day ,newListItems:items}); // earlier -res.sendFile(__dirname,"/weekend.html");
});



app.post("/",function(req,res){  // when user click submit button to send item
    
   item=req.body.newItem;  // this to grab data from input we need body parser
  
   items.push(item);
  res.redirect("/");// it will redirect to app.js and will run app.get where the rending will take place in res.render("list", { kindOfDay: day ,newListItem:item});
  
  
  
  //list is here list.ejs passed from req.body.newItem

  // everytime we render we have to receiver this item in ejs file. Here we are sending the updated list to the user

    
})













  /* var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thusday";
      break;
    case 5:
      day = "Friday";
      break;
      case 6:
        day = "Saturday";
        break;

    default:
    console.log("error");
  }
 */
 


app.listen(3000, function () {
  console.log("server started");
});
