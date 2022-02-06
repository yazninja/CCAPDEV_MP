const router = require('express').Router();
const UserController = require('../controllers/UserController'); // Import UserController
const { registerValidation } = require('../validators.js');
const { isPublic, isPrivate } = require('../middlewares/checkAuth');

// GET login to display login page
router.get('/login', isPublic, function (req, res) {
    res.render('login', { title: 'Login', style2: true, layout: 'start'});
});
// GET register to display register page
router.get('/register', function (req, res) {
    res.render('register', isPublic, { title: 'Register', style2: true, layout: 'start' });
});
// POST methods for form submission
router.post('/register', isPublic, registerValidation, UserController.registerUser);
router.post('/login', isPublic, UserController.loginUser);
// logout
router.get('/logout', isPrivate, UserController.logoutUser);

module.exports = router;