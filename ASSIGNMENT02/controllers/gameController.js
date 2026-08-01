const Game = require('../models/Game');


// Display all games

exports.index = async function(req, res, next) {

    try {

        const games = await Game.find();


        res.render('games/index', {

            title: 'Video Game Collection',

            games: games

        });


    }

    catch(error) {

        next(error);

    }

};




// Display Add Game page

exports.create = function(req, res, next) {


    res.render('games/create', {

        title: 'Add Game'

    });


};




// Save new game

exports.store = async function(req, res, next) {


    try {


        const game = new Game({


            title: req.body.title,


            platform: req.body.platform,


            genre: req.body.genre,


            releaseYear: req.body.releaseYear,


            completionStatus: req.body.completionStatus,


            personalRating: req.body.personalRating


        });



        await game.save();



        res.redirect('/games');


    }


    catch(error) {


        next(error);


    }


};