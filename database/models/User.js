const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost:27017/pesotrack';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(dbURL, options, function () {
    console.log("Connected to DB @ " + dbURL);
});
const UserSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    currMonthlyExpense: Number,
    currMonthlyIncome: Number,
})

const UserModel = mongoose.model('User', UserSchema);

// Create a new user
exports.create = function (obj, next) {
    const user = new UserModel(obj);
    user.save(function (err, user) {
        next(err, user);
    });
};

// Find a user by username
exports.getById = function(id, next) {
    UserModel.findById(id, function(err, user) {
        next(err, user);
    });
};

// Retrieving one user by query
exports.getOne = function(query, next) {
    UserModel.findOne(query, function(err, user) {
        next(err, user);
    });
};
