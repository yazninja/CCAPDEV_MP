const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    currMonthlyExpense: Number,
    currMonthlyIncome: Number,
    transactions: { type : Array , "default" : [] }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;