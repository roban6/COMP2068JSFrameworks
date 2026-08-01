const express = require('express');

const router = express.Router();


const gameController = require('../controllers/gameController');

const auth = require('../middleware/auth');



// Public read-only game list

router.get('/', gameController.index);



// Everything below this requires login



router.get('/create',
auth.isAuthenticated,
gameController.create);



router.post('/create',
auth.isAuthenticated,
gameController.store);



router.get('/:id',
gameController.show);



router.get('/:id/edit',
auth.isAuthenticated,
gameController.edit);



router.put('/:id',
auth.isAuthenticated,
gameController.update);



router.get('/:id/delete',
auth.isAuthenticated,
gameController.deleteConfirm);



router.delete('/:id',
auth.isAuthenticated,
gameController.delete);



module.exports = router;