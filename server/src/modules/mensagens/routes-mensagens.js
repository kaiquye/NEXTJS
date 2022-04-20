const { Router } = require('express');
const Controller = require('./controller-mensagens')

class Rotas {
    App;

    constructor() {
        this.App = Router();
        this.middleware();
        this.RoutesProtegidas();
    }

    middleware() {
    }

    RoutesProtegidas() {
        this.App.post('/', Controller.Criar);
        this.App.get('/', Controller.BuscarTodos);
    }
}
module.exports = new Rotas().App;