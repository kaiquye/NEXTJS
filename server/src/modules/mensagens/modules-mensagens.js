const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(mensagens, equipe) {
        try {
            await ConnectionDatabase('Mensagens').insert({ mensagem: mensagens, Equipe_id: equipe })
        } catch (error) {
            console.log(error)
            throw new Error('Não foi possivel salvar a nova mensagem')
        }
    }

    async Criar(equipe) {
        try {
            return await ConnectionDatabase('Mensagens').select('mensagens').where('Equipe_id', equipe);
        } catch (error) {
            console.log(error)
            throw new Error('Não foi possivel buscar mensagens')
        }
    }
}
module.exports = new Model();