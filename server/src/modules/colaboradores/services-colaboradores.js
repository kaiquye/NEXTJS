const Model = require('./modules-colaboradores');
const Utils = require('./Utils')

class Services {

    async Criar(nome, cpf, equipe) {
        try {
            await Model.Criar(nome, cpf, equipe);
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Services()