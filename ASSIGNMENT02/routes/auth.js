const express = require('express');

const router = express.Router();


const passport = require('passport');

const authController = require('../controllers/authController');




// Registration

router.get('/register', authController.register);


router.post('/register', authController.storeRegister);




// Login

router.get('/login', authController.login);


router.post(

    '/login',

    passport.authenticate('local', {

        successRedirect: '/games',

        failureRedirect: '/login'

    })

);




// Logout

router.get('/logout', authController.logout);



module.exports = router;