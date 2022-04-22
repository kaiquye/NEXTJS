const { Router } = require('express');
const Controller = require('./controller-mensagens-temporarias');
const Validar = require('../../middlewares/Auth')

class Rotas {
    App;

    constructor() {
        this.App = Router();
        // this.middleware();
        this.RoutesProtegidas();
    }

    // middleware() {
    //     this.App.use(Validar.ValidarColaborador);
    // }

    RoutesProtegidas() {
        this.App.post('/', Controller.Criar);
        this.App.get('/:equipe', Controller.Buscar);
    }
}
module.exports = new Rotas().App;