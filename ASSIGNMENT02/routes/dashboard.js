const express = require('express');

const router = express.Router();


const gameController = require('../controllers/gameController');

const auth = require('../middleware/auth');




// Protected game management area


router.get(

    '/games',

    auth.isAuthenticated,

    gameController.dashboard

);



router.get(

    '/games/create',

    auth.isAuthenticated,

    gameController.create

);



router.post(

    '/games/create',

    auth.isAuthenticated,

    gameController.store

);



router.get(

    '/games/:id/edit',

    auth.isAuthenticated,

    gameController.edit

);



router.put(

    '/games/:id',

    auth.isAuthenticated,

    gameController.update

);



router.get(

    '/games/:id/delete',

    auth.isAuthenticated,

    gameController.deleteConfirm

);



router.delete(

    '/games/:id',

    auth.isAuthenticated,

    gameController.delete

);



module.exports = router;