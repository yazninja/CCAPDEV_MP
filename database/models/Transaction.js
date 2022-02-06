const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost:27017/pesotrack';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(dbURL, options, function () {
    console.log("Connected to DB @ " + dbURL);
});
const TransactionSchema = new mongoose.Schema({

    title: String, // Title of the transaction
    username: String, // username of the user who made the transaction
    type: String, // income or expense
    amount: Number, // amount of the transaction
    date: Date, // date of the transaction
    description: String, // description of the transaction
    category: String, // category of the transaction
    recurring: Boolean, // whether the transaction is recurring
    recurringType: Number, // type of recurring transaction
    recurringEndDate: Date // end date of recurring transaction
})

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction;