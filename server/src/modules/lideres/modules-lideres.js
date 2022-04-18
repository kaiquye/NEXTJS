const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(nome, cpf, tipoAcesso, equipe) {
        console.log(nome, cpf, tipoAcesso, equipe)
        try {
            await ConnectionDatabase('lider').insert({ Nome: nome, CPF: cpf, Acesso: tipoAcesso, Equipe_id: equipe })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar um noov lider')
        }
    }
}
module.exports = new Model();