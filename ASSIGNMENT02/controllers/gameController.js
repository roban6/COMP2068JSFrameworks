const Game = require('../models/Game');



// =====================================
// PUBLIC GAME LIST + FUZZY SEARCH
// =====================================

exports.index = async function(req, res, next) {

    try {


        let games;


        if (req.query.search) {


            games = await Game.fuzzySearch(
                req.query.search
            );


        } else {


            games = await Game.find();


        }



        res.render('games/index', {

            title: 'Video Game Collection',

            games: games,

            search: req.query.search || ''

        });



    } catch(error) {


        next(error);


    }

};




// =====================================
// PRIVATE DASHBOARD
// =====================================

exports.dashboard = async function(req, res, next) {


    try {


        const games = await Game.find();



        res.render('games/dashboard', {


            title: 'Manage Games',


            games: games


        });



    } catch(error) {


        next(error);


    }


};





// =====================================
// CREATE GAME PAGE
// =====================================

exports.create = function(req, res, next) {


    res.render('games/create', {


        title: 'Add Game'


    });


};






// =====================================
// SAVE NEW GAME
// =====================================

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



        res.redirect('/dashboard/games');



    } catch(error) {


        next(error);


    }


};






// =====================================
// VIEW SINGLE GAME DETAILS
// =====================================

exports.show = async function(req, res, next) {


    try {


        const game = await Game.findById(req.params.id);



        res.render('games/details', {


            title: game.title,


            game: game


        });



    } catch(error) {


        next(error);


    }


};






// =====================================
// EDIT PAGE
// =====================================

exports.edit = async function(req, res, next) {


    try {


        const game = await Game.findById(req.params.id);



        res.render('games/edit', {


            title: 'Edit Game',


            game: game


        });



    } catch(error) {


        next(error);


    }


};






// =====================================
// UPDATE GAME
// =====================================

exports.update = async function(req, res, next) {


    try {


        await Game.findByIdAndUpdate(


            req.params.id,


            {


                title: req.body.title,


                platform: req.body.platform,


                genre: req.body.genre,


                releaseYear: req.body.releaseYear,


                completionStatus: req.body.completionStatus,


                personalRating: req.body.personalRating


            }


        );



        res.redirect('/dashboard/games');



    } catch(error) {


        next(error);


    }


};






// =====================================
// DELETE CONFIRMATION PAGE
// =====================================

exports.deleteConfirm = async function(req, res, next) {


    try {


        const game = await Game.findById(req.params.id);



        res.render('games/delete', {


            title: 'Delete Game',


            game: game


        });



    } catch(error) {


        next(error);


    }


};






// =====================================
// DELETE GAME
// =====================================

exports.delete = async function(req, res, next) {


    try {


        await Game.findByIdAndDelete(req.params.id);



        res.redirect('/dashboard/games');



    } catch(error) {


        next(error);


    }


};