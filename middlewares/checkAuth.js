const res = require("express/lib/response");

exports.isPrivate = (req, res, next) => {
  // Must be authenticated to go to the next function
  if (req.session.user) {
    console.log(next);
    return next()
  } else {
    res.redirect('/');
  }
};

exports.isPublic = (req, res, next) => {
  // If authenticated, go to home page
  if (req.session.user) {
    res.redirect('/dashboard');
  } else {

    return next();
  }
};