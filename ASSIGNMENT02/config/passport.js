const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');

const User = require('../models/User');



module.exports = function(passport) {


    passport.use(

        new LocalStrategy(

        {

            usernameField: 'email'

        },


        async function(email, password, done) {


            try {


                const user = await User.findOne({

                    email: email

                });



                if(!user) {


                    return done(null, false);


                }



                const match = await bcrypt.compare(

                    password,

                    user.password

                );



                if(match) {


                    return done(null, user);


                }


                else {


                    return done(null, false);


                }



            }


            catch(error) {


                return done(error);


            }


        })


    );





    passport.serializeUser(function(user, done) {


        done(null, user.id);


    });





    passport.deserializeUser(async function(id, done) {


        try {


            const user = await User.findById(id);


            done(null, user);


        }


        catch(error) {


            done(error);


        }


    });



};