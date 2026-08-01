const User = require('../models/User');

const bcrypt = require('bcrypt');




// Display registration page

exports.register = function(req, res) {


    res.render('auth/register', {


        title: 'Register'


    });


};




// Save new user

exports.storeRegister = async function(req, res, next) {


    try {


        const hashedPassword = await bcrypt.hash(

            req.body.password,

            10

        );



        const user = new User({


            username: req.body.username,


            email: req.body.email,


            password: hashedPassword



        });



        await user.save();



        res.redirect('/login');


    }

    catch(error) {


        next(error);


    }


};




// Display login page

exports.login = function(req, res) {


    res.render('auth/login', {


        title: 'Login'


    });


};




// Logout

exports.logout = function(req, res) {


    req.logout(function(err) {


        res.redirect('/');


    });


};