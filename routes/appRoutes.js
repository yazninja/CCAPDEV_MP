const router = require('express').Router();

const UserController = require('../controllers/UserController'); // Import UserController
const TransactionController = require('../controllers/TransactionController'); // Import TransactionController
const { isPublic, isPrivate } = require('../middlewares/checkAuth');
const e = require('connect-flash');



// Pages using main layout
// router.get("/dashboard", isPrivate, function (req, res) {
//     console.log("#Dashboard");
//     UserController.findUser(req.session.user, function (err, user) {
//         if(err) {
//         console.log(err);
//         }
//         else{
//             console.log(user);
//         }
//     });
//     res.render("dashboard", { title: 'Dashboard', home: true, session: req.session});
// });
router.get("/dashboard", isPrivate, UserController.findUser);


router.get("/calendar", isPrivate, function (req, res) {
    console.log("#Calendar");
    res.render("calendar-page", { title: 'Calendar', cal: true, session: req.session });
});
router.get("/add", isPrivate, function (req, res) {
    console.log("#Add");
    res.render("add", { title: 'Add Transaction', add: true, session: req.session });
});
router.get("/remove", isPrivate, function (req, res) {
    console.log("#Remove");
    Transaction.find({ username: user.username }).exec(function (err, transactions) {
        console.log(transactions);
        res.render("remove", { title: 'Remove Transaction', remove: true, user, transactions});
    });
});
router.post("/add-income", isPrivate, function(req, res) {
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
router.post("/add-transaction-income", isPrivate, function(req, res){
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
