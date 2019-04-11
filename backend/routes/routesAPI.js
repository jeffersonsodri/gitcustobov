const router = require('express').Router();

module.exports = function (server) {

    //API routes
    server.use('/api', router);

    //rotas da API
    const fazenda = require('../banco/bancoService');

    fazenda.register(router, '/dadosrebanho');
    
}
