const mongoose = require('mongoose')
Schema = mongoose.Schema

let PrestadorModel = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true, unique: true },
    telefone: { type: Number, required: true },
    servico: { type: Array }
}, { collection: 'prestador', versionKey: false })

module.exports = mongoose.model('Prestador', PrestadorModel)