var mongoCliente = require("mongodb").MongoClient;

if(!global.database){

    mongoCliente.connect("mongodb://localhost", function(err, conn){
        if(err) return console.log("Erro de conexão");
        
        global.database = conn.db("custobovDB");

        
    });
}
    