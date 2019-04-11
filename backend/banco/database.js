
const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/custobov');

mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'. ";
mongoose.Error.messages.String = "O valor '{VALUE}' adicionado não é uma String";
