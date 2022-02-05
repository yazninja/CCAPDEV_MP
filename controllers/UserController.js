const User = require("../database/models/User");

exports.register = function (req, res) {
    UserModel.addUser(req.body, function (err, user) {
        if (err) {
            res.render("register", { title: 'Register', style2: true, layout: 'start', msg: "Username already exists" });
        }
        else {
            res.redirect("dashboard");
        }
    });
};