const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(mensagens, equipe, dataPublicacao, colaborador) {
        console.log(mensagens, equipe, dataPublicacao)
        try {
            await ConnectionDatabase('mensagens_temporaria').insert({ mensagem: mensagens, Equipe_id: equipe, dataPublicacao, Colaborador_id: colaborador })
        } catch (error) {
            console.log(error)
            throw new Error('Não foi possivel salvar a nova mensagem')
        }
    }
}
module.exports = new Model();