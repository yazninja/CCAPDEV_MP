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

exports.findUser = function (username,next) {
    UserModel.findOne({ username: username }, function (err, user) {
        if (err) {
            next(err);
        }
        else {
            next(null, user);
        }
    });
};