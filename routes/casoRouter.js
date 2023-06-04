const express = require('express');
const router = express.Router();
const casoController = require('../controllers/casoController');

router.route('/').post(casoController.insertSelectedOptionByCaso);

router.route('/:id').get(casoController.getCasoById);



module.exports = router;