const
    Categoria = require('../models/categoria'),
    db = require('../services/Database'),
    bcrypt = require('bcrypt')


exports.salvar = (req, res, next) => {
    let c = req.body
    console.log(c);

    console.log(res.locals.categoria);

    Categoria.create(c, (error, categoria) => {
        console.log(categoria);
        
        res.json(categoria)
    })
}

exports.listar = (req, res, next) => {
    db.collection('categoria').find().toArray(function (err, pls) {
        if (err) {
            return next(err)
        }
        res.json(pls)
    })
}