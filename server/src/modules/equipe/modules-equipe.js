const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(nome) {
        console.log(nome)
        try {
            // buscar uma equipe antes de cadastrar uma nova
            await ConnectionDatabase('Mensagens').insert({ Nome: nome })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar uma nova equipe')
        }
    }
}
module.exports = new Model();