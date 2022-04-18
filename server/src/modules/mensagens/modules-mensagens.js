const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(mensagens, equipe) {
        console.log(mensagens, equipe)
        try {
            await ConnectionDatabase('Mensagens').insert({ Mensagens: mensagens, Equipe_id: equipe })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel salvar a nova mensagem')
        }
    }
}
module.exports = new Model();