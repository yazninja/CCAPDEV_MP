const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    username: String, // username of the user who made the transaction
    type: String, // income or expense
    amount: Number, // amount of the transaction
    date: Date, // date of the transaction
    description: String, // description of the transaction
    category: String, // category of the transaction
    recurring: Boolean, // whether the transaction is recurring
    recurringType: String, // type of recurring transaction
    recurringEndDate: String // end date of recurring transaction
})

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction;