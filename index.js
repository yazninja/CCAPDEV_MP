const express = require("express");
const app = express();
const Handlebars = require('handlebars');
const { engine } = require("express-handlebars");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const res = require("express/lib/response");
// Mongoose
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/pesotrack';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(dbURL, options, function () {
    console.log("Connected to DB @ " + dbURL);
});
const User = require("./database/models/User");
const Transaction = require("./database/models/Transaction");
var user = new User();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname = "./public"));

app.set("view engine", "hbs");
app.engine("hbs", engine({ extname: "hbs", handlebars: allowInsecurePrototypeAccess(Handlebars) }));

const port = 3000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});
// Pages using start layout
app.get("/", function (req, res) {
    console.log("#Home Page");
    res.render("index", { title: 'PesoTrack', layout: 'start' });
});
app.get("/reg-page", function (req, res) {
    console.log("#Register");
    res.render("register", { title: 'Register', style2: true, layout: 'start' });
});
app.get("/login-page", function (req, res) {
    console.log("#Login");
    res.render("login", { title: 'Login', style2: true, layout: 'start' });
});
// Post processes
app.post("/register", function (req, res) {
    delete req.body.pass2;
    console.log(req.body);
    User.find({ username: req.body.username }).exec(function (err, results) {
        var count = results.length;
        console.log("Count: " + count);
        if (count == 0) {
            User.create(req.body, (error, creation) => {
                user = creation;
                res.redirect("/dashboard");
            });
        }
        else {
            res.render("register", { title: 'Register', layout: 'start', style2: true, msg: "Username already exists" });
        }
    });
});
app.post("/login", function (req, res) {

    User.find({ username: req.body.username, password: req.body.pass }).exec(function (err, results) {
        var count = results.length;
        console.log("Count: " + count);
        if (count == 0) {
            res.render("login", { title: 'Login', layout: 'start', style2: true, msg: "Username/Password is incorrect" });
        }
        else {
            user = results[0];
            res.redirect("/dashboard");
        }
    });
});
// Pages using main layout
app.get("/dashboard", function (req, res) {
    console.log("#Dashboard");
    res.render("dashboard", { title: 'Dashboard', home: true, user });
});
app.get("/calendar", function (req, res) {
    console.log("#Calendar");
    res.render("calendar-page", { title: 'Calendar', cal: true, user });
});
app.get("/add", function (req, res) {
    console.log("#Add");
    res.render("add", { title: 'Add Transaction', add: true, user });
});
app.post("/add-income", function(req, res) {
    console.log("#Add Income");
    delete req.body.iPresets;
    req.body.username = user.username;
    req.body.type = "income";
    req.body.amount = parseFloat(req.body.amount.substr(4).replace(/,/g, ''))
    if(req.body.custom_category) {
        req.body.category = req.body.custom_category;
    }
    else{
        delete req.body.custom_category;
    }
    if(req.body.repeat == 0)
    {
        re.body.recurring = false;
    }
    else{
        req.body.recurring = true;
        req.body.recurringType = parseInt(req.body.repeat);
    }
    delete req.body.repeat;
    console.log(req.body);
    Transaction.create(req.body, (error, creation) => {
        res.redirect("/dashboard");

    });
});
