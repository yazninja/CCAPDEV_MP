const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const res = require("express/lib/response");
// Mongoose
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/pesotrack';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(dbURL, options, function(){
    console.log("Connected to DB @ " + dbURL);
});
const User = require("./database/models/User");
const Transaction = require("./database/models/Transaction");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname =  "./public"));

app.set("view engine", "hbs");
app.engine("hbs", engine({extname: "hbs"}));

app.get("/", function(req, res){
    console.log("#Home Page");
    res.render("index", {title: 'PesoTrack'});
});
app.get("/reg-page", function(req, res){
    console.log("#Register");
    res.render("register", {title: 'Register'});
});
app.get("/add", function(req, res){
    console.log("#Add");
    res.render("add", {title: 'Add Transaction', layout: 'app'});
    });

app.post("/register", function(req, res){
    console.log(req.body);
    res.redirect("/dashboard", {title: 'Dashboard'});
    // User.create(req.body, (error, post) => {
    //     res.redirect("/dashboard");
    // });
});
app.get("/dashboard", function(req, res){
    console.log("#Dashboard");
    res.render("dashboard", {title: 'Dashboard', layout: 'app'});
});

const port = 3000;
app.listen(port, function(){
    console.log("Listening on port " + port);
});