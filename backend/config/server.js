const express = require('express');
const bodyParse = require('body-parser');


const app = express();

//body parse
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

const port = 3000;
app.listen(port);


console.log("Escutando a nossa aplicação na porta " + port);

module.exports = app;