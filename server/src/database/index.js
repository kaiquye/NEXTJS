const ConnectionDatabase = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'sistema_mensagensdasorte',
    },
});

module.exports = { ConnectionDatabase };
