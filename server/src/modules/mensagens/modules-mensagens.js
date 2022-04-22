const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(mensagens, equipe) {
        console.log(mensagens, equipe)
        try {
            console.log('criar nova mensagem')
            await ConnectionDatabase('mensagens').insert({ mensagem: mensagens, Equipe_id: equipe })
        } catch (error) {
            console.log(error)
            throw new Error('Não foi possivel salvar a nova mensagem')
        }
    }

    async BuscarTodos(equipe) {
        console.log('eq', equipe)
        try {
            return await ConnectionDatabase('Mensagens').select('mensagem').where('Equipe_id', equipe).orderBy('id', 'desc');
        } catch (error) {
            console.log(error)
            throw new Error('Não foi possivel buscar mensagens')
        }
    }
}
module.exports = new Model();