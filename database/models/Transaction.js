const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    username: String,
    Title: String,
    type: String,
    amount: Number,
    date: Date,
    description: String,
    category: String,
    recurring: Boolean,
    recurringType: String,
    recurringEndDate: String
})

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction;