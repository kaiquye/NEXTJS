const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(mensagens, equipe) {
        try {
            await ConnectionDatabase('Mensagens').insert({ mensagem: mensagens, Equipe_id: equipe })
        } catch (error) {
            throw new Error('Não foi possivel salvar a nova mensagem')
        }
    }
}
module.exports = new Model();