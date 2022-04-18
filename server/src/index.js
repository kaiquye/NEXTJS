require('dotenv').config();
const express = require('express');
const cors = require('cors')
const Lideres = require('../src/modules/lideres/routes-lideres')
const Equipe = require('./modules/equipe/routes-equipe')
const Mensagens = require('./modules/equipe/routes-equipe')

class Server {
    App;
    constructor() {
        this.App = express();
        this.middlewares();
        this.Routes();
    }

    middlewares() {
        this.App.use(express.json())
        this.App.use(cors())
    }

    Routes() {
        this.App.get('/', (req, res) => {
            console.log('tested')
        })
        this.App.use('/lideres', Lideres)
        this.App.use('/equipe', Equipe)
        this.App.use('/mensagens', Mensagens)
    }
}
module.exports = Server;