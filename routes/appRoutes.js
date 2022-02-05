const router = require('express').Router();

const User = require("../database/models/User");
const Transaction = require("../database/models/Transaction");

// Pages using start layout
router.get("/reg-page", function (req, res) {
    console.log("#Register");
    res.render("register", { title: 'Register', style2: true, layout: 'start' });
});
router.get("/login-page", function (req, res) {
    console.log("#Login");
    res.render("login", { title: 'Login', style2: true, layout: 'start' });
});
// Post processes
router.post("/register", function (req, res) {
    delete req.body.pass2;
    console.log(req.body);
    User.find({ username: req.body.username }).exec(function (err, results) {
        var count = results.length;
        console.log("Count: " + count);
        if (count == 0) {
            User.create(req.body, (error, creation) => {
                user = creation;
                res.redirect("dashboard");
            });
        }
        else {
            res.render("register", { title: 'Register', layout: 'start', style2: true, msg: "Username already exists" });
        }
    });
});
router.post("/login", function (req, res) {

    User.find({ username: req.body.username, password: req.body.pass }).exec(function (err, results) {
        var count = results.length;
        console.log("Count: " + count);
        if (count == 0) {
            res.render("login", { title: 'Login', layout: 'start', style2: true, msg: "Username/Password is incorrect" });
        }
        else {
            res.redirect("dashboard");
        }
    });
});
// Pages using main layout
router.get("/dashboard", function (req, res) {
    console.log("#Dashboard");
    res.render("dashboard", { title: 'Dashboard', home: true, user });
});
router.get("/calendar", function (req, res) {
    console.log("#Calendar");
    res.render("calendar-page", { title: 'Calendar', cal: true, user });
});
router.get("/add", function (req, res) {
    console.log("#Add");
    res.render("add", { title: 'Add Transaction', add: true, user });
});
router.get("/remove", function (req, res) {
    console.log("#Remove");
    Transaction.find({ username: user.username }).exec(function (err, transactions) {
        console.log(transactions);
        res.render("remove", { title: 'Remove Transaction', remove: true, user, transactions});
    });
});
router.post("/add-income", function(req, res) {
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
        req.body.recurring = false;
    }
    else{
        req.body.recurring = true;
        req.body.recurringType = parseInt(req.body.repeat);
    }
    delete req.body.repeat;
    console.log(req.body);
    Transaction.create(req.body, (error, creation) => {
        res.redirect("dashboard");

    });
});
router.post("/add-transaction-income", function(req, res){
    req.body.type=income;
    req.body.username = user.username;
    delete req.body.iPresets;
    if(req.body.repeat == 0){
       
        req.body.reccuring = false;
    }
    else if(req.body.repeat == 1){
        req.body.reccuring = true;
        req.body.reccuringType = "Daily";
    }
    else if(req.body.repeat == 2){
        req.body.reccuring = true;
        req.body.reccuringType = "Weekly";
    }
    else if(req.body.repeat == 3){
        req.body.reccuring = true;
        req.body.reccuringType = "Monthly";
    }
    else if(req.body.repeat == 4){
        req.body.reccuring = true;
        req.body.reccuringType = "Yearly";
    }
    delete req.body.repeat;
    console.log("#Add Transaction");
    console.log(req.body);
    res.redirect("dashboard");
});

module.exports = router;
