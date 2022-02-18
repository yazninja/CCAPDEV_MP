const TransactionModel = require("../database/models/Transaction");

//Create a new transaction
exports.addTransaction = function (req, res) {
    console.log("#Create");  const { title, userId, type, amount, date, description, category, recurring, recurringType, recurringEndDate } = req.body;
    const transaction = {
        title,
        userId,
        type,
        amount,
        date,
        description,
        category,
        recurring,
        recurringType,
        recurringEndDate
    };
    TransactionModel.create(transaction, (err, transaction) => {
        if (err) {
            req.flash('error_msg', 'Could not create transaction. Please try again.', err);
            console.log(err);
            res.redirect("/add");
        }
        else {
            req.flash('success_msg', 'Transaction added successfully');
            res.redirect("/add");
        }
    });
};
// Get all tranasctions from a user
exports.getAllTransactions = function (req, res) {
    TransactionModel.getAllFromUser(req.session.user, (err, transactions) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.render("remove", { title: 'Edit Transactions', remove: true, transactions: transactions, session: req.session });
        }
    });
};
// Delete transaction by id
exports.deleteTransaction = function (req, res) {
    TransactionModel.deleteById(req.params.id, (err, transaction) => {
        if (err) {
            console.log(err);
            req,flash('error_msg', 'Could not delete transaction. Please try again.', err);
            res.redirect("/remove");
        }
        else {
            req.flash('success_msg', 'Transaction deleted successfully');
            res.redirect("/remove");
        }
    });
};
