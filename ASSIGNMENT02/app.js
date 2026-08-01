var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
var passport = require('passport');
var { MongoStore } = require('connect-mongo');

var methodOverride = require('method-override');


require('dotenv').config();


var connectDB = require('./config/database');

connectDB();


require('./config/passport')(passport);



var indexRouter = require('./routes/index');

var gamesRouter = require('./routes/games');

var dashboardRouter = require('./routes/dashboard');

var authRouter = require('./routes/auth');



var app = express();



// View engine setup

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');




// Middleware

app.use(logger('dev'));


app.use(express.json());


app.use(express.urlencoded({

    extended: false

}));


app.use(methodOverride('_method'));


app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));






// Session Configuration

app.use(session({


    secret: process.env.SESSION_SECRET || 'videogame-secret',


    resave: false,


    saveUninitialized: false,


    store: MongoStore.create({


        mongoUrl: process.env.MONGODB_URI


    })


}));







// Passport Authentication

app.use(passport.initialize());


app.use(passport.session());







// Make logged-in user available to all views

app.use(function(req, res, next) {


    res.locals.user = req.user;


    next();


});







// Routes


app.use('/', indexRouter);


app.use('/games', gamesRouter);


app.use('/dashboard', dashboardRouter);


app.use('/', authRouter);








// Catch 404 Error


app.use(function(req, res, next) {


    next(createError(404));


});







// Error Handler


app.use(function(err, req, res, next) {


    res.locals.message = err.message;


    res.locals.error = req.app.get('env') === 'development'

        ? err

        : {};



    res.status(err.status || 500);


    res.render('error');


});






module.exports = app;