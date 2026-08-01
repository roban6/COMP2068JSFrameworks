const express = require('express');

const router = express.Router();


const gameController = require('../controllers/gameController');



router.get('/', gameController.index);



router.get('/create', gameController.create);


router.post('/create', gameController.store);



router.get('/:id', gameController.show);



router.get('/:id/edit', gameController.edit);



router.put('/:id', gameController.update);



router.get('/:id/delete', gameController.deleteConfirm);



router.delete('/:id', gameController.delete);



module.exports = router;