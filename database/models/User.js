const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    username: String,
    password: String,
    currMonthlyExpense: Number,
    currMonthlyIncome: Number,
    transactions: Array,
})

const User = mongoose.model('User', PostSchema)

module.exports = User;