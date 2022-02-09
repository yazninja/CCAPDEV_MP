const router = require('express').Router();

const UserController = require('../controllers/UserController'); // Import UserController
const TransactionController = require('../controllers/TransactionController'); // Import TransactionController
const { isPrivate } = require('../middlewares/checkAuth'); // Import checkAuth middleware
const { isIncome, isExpense } = require('../middlewares/checkTransaction'); // Import checkTransaction middleware
const e = require('connect-flash');

// Pages using main layout
router.get("/dashboard", isPrivate, UserController.findUser);
// router.get("/account", isPrivate, UserController.findUser);
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
        res.render("remove", { title: 'Remove Transaction', remove: true, });
    });
});
router.get("/edit", isPrivate, TransactionController.getAllTransactions);
// router.get("/settings", isPrivate);
router.post("/add-income", isPrivate, isIncome, TransactionController.createTransaction);
router.post("/add-expense", isPrivate, isExpense, TransactionController.createTransaction);

module.exports = router;
