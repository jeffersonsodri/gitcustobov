const fazendaSchema = require('./bancoDadosRebanho');

fazendaSchema.methods(['get', 'post', 'put', 'delete']);

fazendaSchema.updateOptions({new: true, runValidators: true});

module.exports = fazendaSchema;