const router = require('express').Router();

const UserController = require('../controllers/UserController'); // Import UserController
const TransactionController = require('../controllers/TransactionController'); // Import TransactionController
const { isPrivate } = require('../middlewares/checkAuth'); // Import checkAuth middleware
const { isIncome, isExpense } = require('../middlewares/checkTransaction'); // Import checkTransaction middleware
const e = require('connect-flash');

// Pages using main layout
router.get("/dashboard", isPrivate, UserController.findUser);
// router.get("/account", isPrivate, UserController.findUser);
// trying to render account
router.get("/account", isPrivate, UserController.findUserInfo);

router.get("/calendar", isPrivate, function (req, res) {
    console.log("#Calendar");
    res.render("calendar-page", { title: 'Calendar', cal: true, session: req.session });
});
router.get("/add", isPrivate, function (req, res) {
    console.log("#Add");
    res.render("add", { title: 'Add Transaction', add: true, session: req.session });
});
router.get("/edit", isPrivate, function (req, res) {
    console.log("#Remove");
        res.render("remove", { title: 'Remove Transaction', remove: true, session: req.session});
});
// router.get("/edit", isPrivate, TransactionController.getAllTransactions);
// router.get("/settings", isPrivate);

router.post("/add-income", isPrivate, isIncome, TransactionController.addTransaction);
router.post("/add-expense", isPrivate, isExpense, TransactionController.addTransaction);
router.post("/update-user", isPrivate, UserController.updateUser);
router.post("/delete-transaction", isPrivate, TransactionController.deleteTransaction);
router.get("/get-transactions", isPrivate, TransactionController.getAllTransactions);

module.exports = router;
