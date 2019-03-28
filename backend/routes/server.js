const express = require('express');
const router = express.Router();
const mongo = require('mongodb').MongoClient;

/**
 * Conecção em banco de dados
 */
const url = 'mongodb://127.0.0.1:27017/custobov';
mongo.connect(url, {useNewUrlParser: true});

router.get('/', function(err, res, next) {
    res.send("Meu arquivo Node")

})


router.post('/show', (req, res) => {
    db.collection('fazenda').save(req.body, (err, result) => {
        if(err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/')
    })
})

module.exports = router;
