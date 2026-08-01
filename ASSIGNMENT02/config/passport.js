const LocalStrategy = require('passport-local').Strategy;

const GitHubStrategy = require('passport-github2').Strategy;

const GoogleStrategy = require('passport-google-oauth20').Strategy;


const bcrypt = require('bcrypt');

const User = require('../models/User');



module.exports = function(passport) {



passport.use(

new LocalStrategy(

{
usernameField:'email'
},

async function(email,password,done){


try{


const user = await User.findOne({
email:email
});


if(!user){

return done(null,false);

}


const match = await bcrypt.compare(

password,

user.password

);



if(match){

return done(null,user);

}


return done(null,false);


}

catch(error){

return done(error);

}


})

);






passport.use(

new GitHubStrategy(

{

clientID:process.env.GITHUB_CLIENT_ID,

clientSecret:process.env.GITHUB_CLIENT_SECRET,

callbackURL:process.env.GITHUB_CALLBACK_URL

},


async function(accessToken,refreshToken,profile,done){


try{


let user = await User.findOne({

githubId:profile.id

});



if(!user){


user = new User({


username:profile.username,


email: profile.emails
? profile.emails[0].value
: `${profile.username}@github.com`,


password:'oauth-user',


githubId:profile.id


});


await user.save();


}



return done(null,user);


}

catch(error){

return done(error);

}


})


);








passport.use(

new GoogleStrategy(

{

clientID:process.env.GOOGLE_CLIENT_ID,

clientSecret:process.env.GOOGLE_CLIENT_SECRET,

callbackURL:process.env.GOOGLE_CALLBACK_URL

},



async function(accessToken,refreshToken,profile,done){



try{


let user = await User.findOne({

googleId:profile.id

});




if(!user){


user = new User({


username:profile.displayName,


email:profile.emails[0].value,


password:'oauth-user',


googleId:profile.id


});


await user.save();


}



return done(null,user);



}

catch(error){

return done(error);

}



})


);







passport.serializeUser(function(user,done){

done(null,user.id);

});





passport.deserializeUser(async function(id,done){


try{


const user = await User.findById(id);


done(null,user);


}

catch(error){

done(error);

}


});


};