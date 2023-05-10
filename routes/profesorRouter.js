const {getAllProfesores}=require('../controllers/profesorController');

const express=require('express');

const router=express.Router();

router.route('/').get(getAllProfesores);

module.exports=router;