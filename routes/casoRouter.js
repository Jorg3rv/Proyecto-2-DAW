const express = require('express');
const router = express.Router();
const casoController = require('../controllers/casoController');

router.route('/:id').get(casoController.getCasoById);

router.route('/pasiva/:id').get(casoController.getCasoPasivaById);

module.exports = router;