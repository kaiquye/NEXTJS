const Model = require('./modules-mensagens-temporarias');
const Utils = require('./Utils')

class Services {

    async Criar(mensagens, equipe, dataPublicacao, colaborador) {
        try {
            return await Model.Criar(mensagens, equipe, dataPublicacao, colaborador);
        } catch (error) {
            return new Error('Não foi possivel cadastrar uma nova mensagem.')
        }
    }
}
module.exports = new Services()