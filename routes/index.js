var express = require('express');
var router = express.Router();
var mongoData = require("mongodb").MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = connectDB();
  // res.render('index', { title: 'Frase: Meu nome é Êmille' });
  res.send(db.mongo.find({}).toArray());
});


async function connectDB(){

  if(!global.database){
      
      const fazenda = mongoData.connect("mongodb://localhost:27017", function(err, conn){
          if(err) return console.log("Erro de conexão");
          
          global.database = conn.db("custobovDB");
          
        });
        return fazenda;
      
  }
}

module.exports = router;