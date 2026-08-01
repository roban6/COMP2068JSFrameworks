const express = require('express');

const router = express.Router();


const gameController = require('../controllers/gameController');



// GET all games

router.get('/', gameController.index);



// GET create game form

router.get('/create', gameController.create);



// POST create game

router.post('/create', gameController.store);



module.exports = router;