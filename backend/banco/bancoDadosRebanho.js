const restful = require('node-restful');
const mongoose = restful.mongoose;


const touro = new mongoose.Schema({
    touroPesoMedio: { type: Number, min: 0, require: true },
    touroCabecaInicial: { type: Number, min: 0, require: true },
    touroCabecaFinal: { type: Number, min: 0, require: true },
    touroValor: { type: Number, min: 0, require: true }
})

const vacaMatriz = new mongoose.Schema({
    vacaMatrizPesoMedio: { type: Number, min: 0, require: true },
    vacaMatrizCabecaInicial: { type: Number, min: 0, require: true },
    vacaMatrizCabecaFinal: { type: Number, min: 0, require: true },
    vacaMatrizValor: { type: Number, min: 0, require: true },
})

const femea36 = new mongoose.Schema({
    femeas36PesoInicial: { type: Number, min: 0, require: true },
    femeas36PesoFinal: { type: Number, min: 0, require: true },
    femeas36Valor: { type: Number, min: 0, require: true },
    femeas36CabecasInicial: { type: Number, min: 0, require: true },
    femeas36CabecasFinal: { type: Number, min: 0, require: true }
})


const femea2436 = new mongoose.Schema({
    femeas2436PesoInicial : { type: Number, min: 0, require: true },
    femeas2436PesoFinal : { type: Number, min: 0, require: true },
    femeas2436Valor : { type: Number, min: 0, require: true },
    femeas2436CabecasInicial : { type: Number, min: 0, require: true },
    femeas2436CabecasFinal : { type: Number, min: 0, require: true }

})
const femea1224 = new mongoose.Schema({
    femeas1224PesoInicial : { type: Number, min: 0, require: true },
    femeas1224PesoFinal : { type: Number, min: 0, require: true },
    femeas1224Valor : { type: Number, min: 0, require: true },
    femeas1224CabecasInicial : { type: Number, min: 0, require: true },
    femeas1224CabecasFinal : { type: Number, min: 0, require: true }

})
const femea012 = new mongoose.Schema({
    femeas012PesoInicial : { type: Number, min: 0, require: true },
    femeas012PesoFinal : { type: Number, min: 0, require: true },
    femeas012Valor : { type: Number, min: 0, require: true },
    femeas012CabecasInicial : { type: Number, min: 0, require: true },
    femeas012CabecasFinal : { type: Number, min: 0, require: true }
})

const macho012 = new mongoose.Schema({
    machos012PesoInicial : { type: Number, min: 0, require: true },
    machos012PesoFinal : { type: Number, min: 0, require: true },
    machos012Valor : { type: Number, min: 0, require: true },
    machos012CabecasInicial : { type: Number, min: 0, require: true },
    machos012CabecasFinal : { type: Number, min: 0, require: true }

})
const macho1224 = new mongoose.Schema({
    machos1224PesoInicial : { type: Number, min: 0, require: true },
    machos1224PesoFinal : { type: Number, min: 0, require: true },
    machos1224Valor : { type: Number, min: 0, require: true },
    machos1224CabecasInicial : { type: Number, min: 0, require: true },
    machos1224CabecasFinal : { type: Number, min: 0, require: true }
})
const macho2436 = new mongoose.Schema({
    machos2436PesoInicial : { type: Number, min: 0, require: true },
    machos2436PesoFinal : { type: Number, min: 0, require: true },
    machos2436Valor : { type: Number, min: 0, require: true },
    machos2436CabecasInicial : { type: Number, min: 0, require: true },
    machos2436CabecasFinal : { type: Number, min: 0, require: true }

})
const macho36 = new mongoose.Schema ({
    machos36PesoInicial : { type: Number, min: 0, require: true },
    machos36PesoFinal : { type: Number, min: 0, require: true },
    machos36Valor : { type: Number, min: 0, require: true },
    machos36CabecasInicial : { type: Number, min: 0, require: true },
    machos36CabecasFinal : { type: Number, min: 0, require: true }
})


const dadosRebanho = new mongoose.Schema({
    fazenda: { type: String, require: true },
    ano: { type: Number, min: 0, require: true },
    municipio: { type: String, require: true },
    touro,
    vacaMatriz,
    femea36,
    femea2436,
    femea1224,
    femea012,
    macho012,
    macho1224,
    macho2436,
    macho36,
    rebanhoMedioAnualEstimadoCabeca: { type: Number, min: 0, require: true },
    rebanhoMedioAnualEstimadoUA: { type: Number, min: 0, require: true }
})

module.exports = restful.model('dadosRebanho', dadosRebanho);

