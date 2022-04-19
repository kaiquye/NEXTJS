const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(Nome) {
        try {
            // buscar uma equipe antes de cadastrar uma nova
            await ConnectionDatabase('equipe').insert({ Nome })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar uma nova equipe')
        }
    }
}
module.exports = new Model();