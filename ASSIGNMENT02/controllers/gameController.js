const Game = require('../models/Game');



// Display all games

exports.index = async function(req, res, next) {

    try {

        const games = await Game.find();


        res.render('games/index', {

            title: 'Video Game Collection',

            games: games

        });


    } catch(error) {

        next(error);

    }

};





// Display create page

exports.create = function(req, res, next) {


    res.render('games/create', {

        title: 'Add Game'

    });


};





// Save game

exports.store = async function(req, res, next) {


    try {


        const game = new Game(req.body);


        await game.save();


        res.redirect('/games');


    }

    catch(error) {

        next(error);

    }


};





// Display single game

exports.show = async function(req, res, next) {


    try {


        const game = await Game.findById(req.params.id);


        res.render('games/details', {


            title: game.title,

            game: game


        });


    }

    catch(error) {


        next(error);


    }


};





// Display edit page

exports.edit = async function(req, res, next) {


    try {


        const game = await Game.findById(req.params.id);


        res.render('games/edit', {


            title: 'Edit Game',

            game: game


        });


    }

    catch(error) {


        next(error);


    }


};





// Update game

exports.update = async function(req, res, next) {


    try {


        await Game.findByIdAndUpdate(

            req.params.id,

            req.body

        );


        res.redirect('/games');


    }

    catch(error) {


        next(error);


    }


};





// Delete confirmation

exports.deleteConfirm = async function(req, res, next) {


    try {


        const game = await Game.findById(req.params.id);


        res.render('games/delete', {


            title: 'Delete Game',

            game: game


        });


    }

    catch(error) {


        next(error);


    }


};





// Delete game

exports.delete = async function(req, res, next) {


    try {


        await Game.findByIdAndDelete(req.params.id);


        res.redirect('/games');


    }

    catch(error) {


        next(error);


    }


};