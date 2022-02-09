const res = require("express/lib/response");

exports.isIncome = (req, next) => {
    req.body.type = "income";
    req.body.username = req.session.username;
    req.body.amount = parseFloat(req.body.amount.substr(4).replace(/,/g, ''));
    delete req.body.iPresets;
    if (req.body.custom_category) {
        req.body.category = req.body.custom_category;
    }
    else {
        delete req.body.custom_category;
    }
    if (req.body.repeat == 0) {
        req.body.reccuring = false;
    }
    else if (req.body.repeat == 1) {
        req.body.reccuring = true;
        req.body.reccuringType = "Daily";
    }
    else if (req.body.repeat == 2) {
        req.body.reccuring = true;
        req.body.reccuringType = "Weekly";
    }
    else if (req.body.repeat == 3) {
        req.body.reccuring = true;
        req.body.reccuringType = "Monthly";
    }
    else if (req.body.repeat == 4) {
        req.body.reccuring = true;
        req.body.reccuringType = "Yearly";
    }
    delete req.body.repeat;
    console.log(req.body);
    return next();
};
exports.isExpense = (req, next) => {
    req.body.type = "expense";
    req.body.username = req.session.username;
    req.body.amount = parseFloat(req.body.amount.substr(4).replace(/,/g, ''));
    delete req.body.ePresets;
    if (req.body.custom_category) {
        req.body.category = req.body.custom_category;
    }
    else {
        delete req.body.custom_category;
    }
    if (req.body.repeat == 0) {
        req.body.reccuring = false;
    }
    else if (req.body.repeat == 1) {
        req.body.reccuring = true;
        req.body.reccuringType = "Daily";
    }
    else if (req.body.repeat == 2) {
        req.body.reccuring = true;
        req.body.reccuringType = "Weekly";
    }
    else if (req.body.repeat == 3) {
        req.body.reccuring = true;
        req.body.reccuringType = "Monthly";
    }
    else if (req.body.repeat == 4) {
        req.body.reccuring = true;
        req.body.reccuringType = "Yearly";
    }
    delete req.body.repeat;
    console.log(req.body);
    return next();
};