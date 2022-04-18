const Model = require('./modules-mensagens');
const Utils = require('./Utils')

class Services {

    async Criar(mensagens, equipe) {
        try {
            const Error = Utils.VerificarCamposNullos([mensagens, equipe])
            if (Error) return Error
            const Lider = await Model.Criar(mensagens, equipe);
            console.log(Lider)
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Services()