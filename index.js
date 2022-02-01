const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const res = require("express/lib/response");
// Mongoose
const mongoose = require('mongoose');
const User = require("../database/models/User");
const Transaction = require("../database/models/Transaction");
const dbURL = 'mongodb://localhost:27017/pesotrack';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(dbURL, options, function(){
    console.log("Connected to DB @ " + dbURL);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname =  "./public"));

app.set("view engine", "hbs");
app.engine("hbs", engine({extname: "hbs"}));

app.get("/", function(req, res){
    res.render("index");
});

app.post("/register", function(req, res){
    console.log(req.body);
    User.create(req.body, (error, post) => {
        res.redirect("/dashboard");
    });
});

const port = 3000;
app.listen(port, function(){
    console.log("Listening on port " + port);
});