const server = require('./config/server')
require('./banco/database')
require('./routes/routesAPI')(server)