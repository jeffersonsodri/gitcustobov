const restful = require('node-restful');
const mongoose = restful.mongoose;

const fazendaSchema = new mongoose.Schema({
    nomeFazenda: { type: String, required: true },
    proprietario: { type: String, required: true },
    tamanho: { type: String, required: false },
    estado: { type: String, required: true },
    cidade: { type: String, required: true }
})

module.exports = restful.model('fazendas', fazendaSchema);