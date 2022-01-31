const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = new express();


var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port);
});
app.use(express.static(__dirname + "/public"));
app.engine("hbs", exphbs({extname: "hbs"}));