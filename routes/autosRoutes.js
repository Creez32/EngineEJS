const express = require('express')
const router = express.Router() //requiero el metodo Router

const autosController = require('../controllers/autosController');

router.get('/',autosController.autos)
router.get('/show/:id',autosController.show)
router.get('/agregar',autosController.agregar)

module.exports = router