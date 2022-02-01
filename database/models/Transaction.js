const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    id: Number,
    username: String,
    type: String,
    amount: Number,
    date: Date,
    description: String,
    category: String,
    recurring: Boolean,
    recurringType: String,
    recurringEndDate: String,
    recurringFrequency: Number,
    tags: Array,
})

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction;