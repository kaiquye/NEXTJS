const { Router } = require('express');
const Controller = require('./controller-colaboradores')
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
        this.App.use(Auth.ValidarColaborador)
    }

    RoutesProtegidas() {
        this.App.post('/', Controller.Criar);
    }
    RoutesPublicas() {
        this.App.post('/sing', Controller.CriarTokenColaborador);
        this.App.get('/:id', Controller.BuscarTodos);
    }
}
module.exports = new Rotas().App;