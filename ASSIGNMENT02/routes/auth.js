const express = require('express');

const router = express.Router();

const passport = require('passport');

const authController = require('../controllers/authController');



router.get('/register',authController.register);


router.post('/register',authController.storeRegister);



router.get('/login',authController.login);



router.post(

'/login',

passport.authenticate('local',

{

successRedirect:'/games',

failureRedirect:'/login'

})

);




// GitHub

router.get(

'/auth/github',

passport.authenticate('github',

{

scope:['user:email']

})

);



router.get(

'/auth/github/callback',

passport.authenticate('github',

{

failureRedirect:'/login'

}),

(req,res)=>{

res.redirect('/games');

}

);





// Google

router.get(

'/auth/google',

passport.authenticate('google',

{

scope:['profile','email']

})

);



router.get(

'/auth/google/callback',

passport.authenticate('google',

{

failureRedirect:'/login'

}),

(req,res)=>{

res.redirect('/games');

}

);





router.get('/logout',authController.logout);



module.exports = router;