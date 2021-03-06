require('dotenv').config();
const express = require('express');
const cors = require('cors')
const Lideres = require('../src/modules/lideres/routes-lideres')
const Equipe = require('./modules/equipe/routes-equipe')
const Mensagens = require('./modules/mensagens/routes-mensagens')
const Colaboradores = require('./modules/colaboradores/routes-colaboradores')
const mensagensTemporarias = require('./modules/mensagens-temporarias/routes-mensagens-temporarias')
const Auth = require('../src/middlewares/Auth')
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
        this.App.use('/auth', Auth.UsuarioAuth);
        this.App.use('/lideres', Lideres)
        this.App.use('/equipe', Equipe)
        this.App.use('/mensagens', Mensagens)
        this.App.use('/mensagenstemporarias', mensagensTemporarias)
        this.App.use('/colaboradores', Colaboradores)
    }
}
module.exports = Server;