const Model = require('./modules-equipe');
const Utils = require('./Utils')

class Services {

    async Criar(nome) {
        try {
            const Error = Utils.VerificarCamposNullos([nome])
            if (Error) return Error
            await Model.Criar(nome);
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Services()