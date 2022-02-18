const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost:27017/pesotrack';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(dbURL, options, function () {
    console.log("Connected to DB @ " + dbURL);
});
const TransactionSchema = new mongoose.Schema({

    title: String, // Title of the transaction
    userId: String, // user ID of the user who made the transaction
    type: String, // income or expense
    amount: Number, // amount of the transaction
    date: Date, // date of the transaction
    description: String, // description of the transaction
    category: String, // category of the transaction
    recurring: Boolean, // whether the transaction is recurring
    recurringType: String, // type of recurring transaction
    recurringEndDate: Date // end date of recurring transaction
})

const TransactionModel = mongoose.model('Transaction', TransactionSchema)

// Create a new transaction
exports.create = function (obj, next) {
    const transaction = new TransactionModel(obj);
    transaction.save(function (err, user) {
        next(err, user);
    });
};

// Find all transactions by username
exports.getAllFromUser = function (username, next) {
    TransactionModel.find({ username: username }, function (err, transactions) {
        next(err, transactions);
    });
};

// Delete transaction by id
exports.deleteById = function (id, next) {
    TransactionModel.deleteOne({ _id: id }, function (err, transaction) {
        next(err, transaction);
    });
};

// Update transaction by id
exports.updateById = function (id, obj, next) {
    TransactionModel.updateOne({ _id: id }, obj, function (err, transaction) {
        next(err, transaction);
    });
};
