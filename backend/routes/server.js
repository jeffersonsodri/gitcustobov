const express = require('express');
const router = express.Router();
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
/**
 * Conecção em banco de dados
 */
const url = 'mongodb://127.0.0.1:27017/custobov';
const db = mongo.connect(url, {useNewUrlParser: true});

app.post('/', function(req, res) {
    res.send("Meu arquivo Node com o banco de dados");
    console.log(req.body);
});



module.exports = app;
