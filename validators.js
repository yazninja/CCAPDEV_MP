const { body } = require('express-validator');

const registerValidation = [
  // Password needs to be min 6 chars
  body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
];

module.exports = { registerValidation };