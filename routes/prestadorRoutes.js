const express = require('express'),
    router = express.Router(),
    catCtrl = require('../controllers/prestadorController')
    authCtrl = require('../controllers/prestadorController')

router.post('/', authCtrl.salvar)
router.get('/:prestador', catCtrl.listar)

module.exports = router