const express = require('express');
const bodyParse = require('body-parser');
const fazendaSchema = require('./banco/bancoService');
const router = express.Router();
const mongoose = require('./banco/database');


const app = express();

//body parse
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

const port = 3000;
app.listen(port);


console.log("Escutando a nossa aplicação na porta " + port);


app.get('/', function (req, res) {
    res.send({ msg: 'olá que tal' });

});

app.post('/app', function (req, res) {
    const dados = req.body;
    res.send(dados);
});

//API routes
app.use('/api', router);

//rotas da API
const fazenda = require('./banco/bancoService');

fazenda.register(router, '/fazenda');
