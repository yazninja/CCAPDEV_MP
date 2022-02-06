const router = require('express').Router();
const UserController = require('../controllers/UserController'); // Import UserController
const { registerValidation } = require('../validators.js');

// GET login to display login page
router.get('/login', function (req, res) {
    res.render('login', { title: 'Login', style2: true, layout: 'start'});
});
// GET register to display register page
router.get('/register', function (req, res) {
    res.render('register', { title: 'Register', style2: true, layout: 'start' });
});
// POST methods for form submission
router.post('/register', registerValidation, UserController.registerUser);
router.post('/login', UserController.loginUser);
// logout
// router.get('/logout', UserController.logoutUser);

module.exports = router;