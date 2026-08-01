const express = require('express');

const router = express.Router();


const Game = require('../models/Game');



// GET games list

router.get('/', async function(req, res, next) {


    try {


        const games = await Game.find();


        res.render('games/index', {


            title: 'Video Games',

            games: games


        });


    }

    catch(error) {


        next(error);


    }


});



module.exports = router;