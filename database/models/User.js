const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String,
    currMonthlyExpense: Number,
    currMonthlyIncome: Number,
    transactions: Array,
})

const User = mongoose.model('User', UserSchema)

module.exports = User;