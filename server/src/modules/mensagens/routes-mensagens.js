const { Router } = require('express');
const Controller = require('./controller-mensagens')
const Auth = require('../../middlewares/Auth')

class Rotas {
    App;

    constructor() {
        this.App = Router();
        this.RoutesPublicas();
        this.middleware();
        this.RoutesProtegidas();
    }

    middleware() {
        this.App.use(Auth.ValidarLider);
    }

    RoutesProtegidas() {
        this.App.post('/', Controller.Criar);
    }
    RoutesPublicas() {
        this.App.get('/:equipe', Controller.BuscarTodos);
    }
}
module.exports = new Rotas().App;