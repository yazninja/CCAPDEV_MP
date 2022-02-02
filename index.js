const express = require("express");
const app = express();
const Handlebars = require('handlebars');
const { engine } = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
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
var user = new User();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname =  "./public"));

app.set("view engine", "hbs");
app.engine("hbs", engine({extname: "hbs", handlebars: allowInsecurePrototypeAccess(Handlebars)}));

app.get("/", function(req, res){
    console.log("#Home Page");
    res.render("index", {title: 'PesoTrack'});
});
app.get("/reg-page", function(req, res){
    console.log("#Register");
    res.render("register", {title: 'Register', style2: true});
});
app.get("/add", function(req, res){
    console.log("#Add");
    res.render("add", {title: 'Add Transaction', layout: 'app', add: true});
    });

app.post("/register", function(req, res){
    delete req.body.pass2;
    console.log(req.body);
    User.find({username: req.body.username}).exec(function (err, results) {
        var count = results.length;
        console.log("Count: " + count);
        if(count == 0){
            User.create(req.body, (error, creation) => {
                user = creation;
                res.redirect("/dashboard");
            });
        }
        else{
            res.render("register", {title: 'Register', style2: true, msg: "Username already exists"});
        }
      });
});
app.get("/login-page", function(req, res){
    console.log("#Login");
    res.render("login", {title: 'Login', style2: true});
});
app.post("/login",function(req, res){

    User.find({username: req.body.username, password: req.body.pass}).exec(function (err, results) {
        var count = results.length;
        console.log("Count: " + count);
        if(count == 0){
            res.render("login", {title: 'Login', style2: true, msg: "Username/Password is incorrect"});
        }
        else{
            user = results[0];
            res.redirect("/dashboard");
        }
    });
});
app.get("/calendar", function(req, res){
    console.log("#Calendar");
    res.render("calendar-page", {title: 'Calendar', layout: 'app'});
});
app.get("/dashboard", function(req, res){
    console.log("#Dashboard");
    res.render("dashboard", {title: 'Dashboard', layout: 'app', home: true, user: user});
});
const port = 3000;
app.listen(port, function(){
    console.log("Listening on port " + port);
});