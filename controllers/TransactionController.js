const TransactionModel = require("../database/models/Transaction");
exports.createTransaction = function (req, res) {
    console.log("#Create");
    const { title, username, type, amount, date, description, category, recurring, recurringType, recurringEndDate } = req.body;
    const transaction = {
        title,
        username,
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
    TransactionModel.getAllFromUser(req.session.username, (err, transactions) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.render("remove", { title: 'Edit Transactions', remove: true, transactions: transactions, session: req.session });
        }
    });
};
