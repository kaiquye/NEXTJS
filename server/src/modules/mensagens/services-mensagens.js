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


    async BuscarTodos(equipe) {
        console.log('teste2', equipe)
        try {
            const Mensagens = await Model.BuscarTodos(equipe);
            return Mensagens
        } catch (error) {
            return new Error('Não foi possivel buscar mensagens.')
        }
    }
}
module.exports = new Services()