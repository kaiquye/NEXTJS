const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(mensagens, equipe, dataPublicacao) {
        console.log(mensagens, equipe, dataPublicacao)
        try {
            await ConnectionDatabase('mensagens_temporaria').insert({ mensagens, Equipe_id: equipe, dataPublicacao })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel salvar a nova mensagem') 
        }
    }
}
module.exports = new Model();