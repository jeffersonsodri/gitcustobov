const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

/**
 * Conecção em banco de dados
 */
const url = 'mongodb://127.0.0.1:27017/custobov';
MongoClient.connect(url, (err, db) => {
  if(err) { 
    res.send(err);
  }
  else {
    console.log("Banco conectando........");
    db.collection('fazenda').find().toArray(function(err, result){
        if(err) res.send(err);
        else{
            console.log(result);
        }
    })      
  }
  
});
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
