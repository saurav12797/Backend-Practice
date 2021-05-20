const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs"); // always below express // using of ejs with express module

//our view engine by default will look into view folder

app.get("/", function (req, res) {
  var today = new Date();

  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };

  var day= today.toLocaleDateString("en-US",options);













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
 

  res.render("list", { kindOfDay: day }); // earlier -res.sendFile(__dirname,"/weekend.html");
});

app.listen(3000, function () {
  console.log("server started");
});
