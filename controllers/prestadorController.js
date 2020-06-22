const
    Prestador = require('../models/prestador'),
    db = require('../services/Database'),
    bcrypt = require('bcrypt')

exports.salvar = (req, res, next) => {
    let p = req.body
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(p.senha, salt, (err, hash) => {
            if (err) return reject(err)
            p.senha = hash

            Prestador.create(p, (error, prestador) => {
                res.json(prestador)
            })
        });
    });
}

exports.listar = (req, res, next) => {

    db.collection('prestador').find({ servico: req.params.prestador }).toArray(function (err, pls) {
        if (err) {
            return next(err)
        }
        console.log(pls);

        res.json(pls)
    })
}