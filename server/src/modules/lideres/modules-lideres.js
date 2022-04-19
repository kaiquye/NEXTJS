const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(nome, cpf, equipe) {
        console.log(nome, cpf, equipe)
        try {
            await ConnectionDatabase('lider').insert({ Nome: nome, CPF: cpf, Equipe_id: equipe })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar um noov lider')
        }
    }
}
module.exports = new Model();