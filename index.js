const express = require("express");
const { engine } = require("express-handlebars");
const res = require("express/lib/response");

const mongoose = reuire('mongoose');

const dbURL = 'mongodb://localhost:27017/pesotrack';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(dbURL, options, function(){
    console.log("Connected to DB");
});

const app = express();

const port = 3000;
app.listen(port, function(){
    console.log("Listening on port " + port);
});
app.use(express.static(__dirname =  "./public"));

app.set("view engine", "hbs");
app.engine("hbs", engine({extname: "hbs"}));

app.get("/", function(req, res){
    res.render("index");
});