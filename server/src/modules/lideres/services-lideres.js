const Model = require('./modules-lideres');
const Utils = require('./Utils')

class Services {

    async Criar(nome, cpf, equipe) {
        try {
            const Error = Utils.VerificarCamposNullos([nome, cpf, equipe])
            if (Error) return Error
            const Lider = await Model.Criar(nome, cpf, equipe);
            console.log(Lider)
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Services()