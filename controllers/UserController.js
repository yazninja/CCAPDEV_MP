const bcrypt = require('bcrypt');
const UserModel = require("../database/models/User");
const { validationResult } = require("express-validator");

exports.registerUser = function (req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { username, firstName, lastName, password, currMonthlyIncome } = req.body;

        UserModel.getOne({ username: username }, (err, result) => {
            if (result) {
                console.log(result);
                // found a match, return to login with error
                req.flash('error_msg', 'User already exists. Please login.');
                res.redirect('/login');
            } else {
                const saltRounds = 10;

                // Hash password
                bcrypt.hash(password, saltRounds, (err, hashed) => {
                    const newUser = {
                        username,
                        firstName,
                        lastName,
                        password: hashed,
                        currMonthlyIncome
                    };

                    UserModel.create(newUser, (err, user) => {
                        if (err) {
                            console.log("Error: ", err);
                            req.flash('error_msg', 'Could not create user. Please try again.');
                            res.redirect('/register');
                            // res.status(500).send({ message: "Could not create user"});
                        } else {
                            console.log(user);
                            req.flash('success_msg', 'You are now registered! Login below.');
                            res.redirect('/login');
                        }
                    });
                });
            }
        });
    } else {
        const messages = errors.array().map((item) => item.msg);

        req.flash('error_msg', messages.join(' '));
        res.redirect('/register');
    }
};

exports.loginUser = function (req, res) {
    const {
        username,
        pass
    } = req.body;
    UserModel.getOne({ username: username }, (err, user) => {
        if (err) {
            // Database error occurred...
            req.flash('error_msg', 'Something happened! Please try again.');
            res.redirect('/login');
        } else {
            // Successful query
            if (user) {
                // User found!

                // Check password with hashed value in the database
                bcrypt.compare(pass, user.password, (err, result) => {
                    // passwords match (result == true)
                    if (result) {
                        // Update session object once matched!
                        req.session.user = user._id;
                        req.session.username = user.username;
                        req.session.firstName = user.firstName;
                        req.session.lastName = user.lastName;
                        console.log(req.session);

                        res.redirect('/dashboard');
                    } else {
                        // passwords don't match
                        req.flash('error_msg', 'Incorrect password. Please try again.');
                        res.redirect('/login');
                    }
                    console.log(result);
                });
            } else {
                // No user found
                req.flash('error_msg', 'No registered user with that email. Please register.');
                res.redirect('/register');
            }
        }
    });
};
exports.logoutUser = function (req, res) {
    if(req.session) {
        req.session.destroy(function(){
            res.clearCookie('connect.sid');
            res.redirect('/');
        });
    }
};
exports.findUser = function (req,res) {
    console.log(req.session.user);
    const { user } = req.session;
    UserModel.getById(user, function (err, user){
        if (err) {
            // Database error occurred...
            console.log("ERROR", err, "ERROR");
            req.flash('error_msg', 'Something happened! Please try again.');
            res.redirect('/login');
        }
        else{
            res.render('dashboard', {title: 'Dashboard', home: true, session: req.session, user});
        }
    });
};
exports.findUserInfo = function (req,res) {
    console.log(req.session.user);
    const { user } = req.session;
    UserModel.getById(user, function (err, user){
        if (err) {
            // Database error occurred...
            console.log("ERROR", err, "ERROR");
            req.flash('error_msg', 'Something happened! Please try again.');
            res.redirect('/login');
        }
        else{
            res.render("setaccount", { title: 'Account', account: true, session: req.session, user});
        }
    });
};
exports.updateUser = function (req,res) {
    const { user } = req.session;
    const { username, firstName, lastName, currMonthlyIncome } = req.body;
    UserModel.update(user, { username, firstName, lastName, currMonthlyIncome }, function (err, user){
        if (err) {
            // Database error occurred...
            console.log("ERROR", err, "ERROR");
            req.flash('error_msg', 'Something happened! Please try again.');
            res.redirect('/login');
        }
        else{
            req.flash('success_msg', 'User information updated!');
            req.session.user = user._id;
            req.session.username = user.username;
            req.session.firstName = user.firstName;
            req.session.lastName = user.lastName;
            console.log(user);
            res.redirect('/account');
        }
    });
}