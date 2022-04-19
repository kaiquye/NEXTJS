const { ConnectionDatabase } = require('../../database/index');
class Model {

    async Criar(nome, cpf, equipe) {
        try {
            // buscar uma equipe antes de cadastrar uma nova
            await ConnectionDatabase('colaborador').insert({ nome, cpf, Equipe_id: equipe })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar uma nova equipe')
        }
    }
}
module.exports = new Model();