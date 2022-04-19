const Model = require('./modules-mensagens');
const Utils = require('./Utils')

class Services {

    async Criar(mensagens, equipe) {
        console.log('teste2', mensagens, equipe)
        try {
            const Lider = await Model.Criar(mensagens, equipe);
            console.log(Lider)
        } catch (error) {
            return new Error('Não foi possivel cadastra uma nova mensagem.')
        }
    }
}
module.exports = new Services()