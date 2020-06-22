const express = require('express'),
    router = express.Router(),
    catCtrl = require('../controllers/categoriaController')
    permit = require('../middlewares/permission')

router.post('/', permit('adm'), catCtrl.salvar)
router.get('/', catCtrl.listar)

module.exports = router