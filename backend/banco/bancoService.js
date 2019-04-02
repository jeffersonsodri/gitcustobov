const fazendaSchema = require('./banco');

fazendaSchema.methods(['get', 'post', 'put', 'delete']);

fazendaSchema.updateOptions({new: true});

module.exports = fazendaSchema;