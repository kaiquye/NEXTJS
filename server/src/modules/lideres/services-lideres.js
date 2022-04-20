const Model = require('./modules-lideres');
const Utils = require('./Utils')
const Auth = require('../../middlewares/Auth')

class Services {

    async Criar(nome, cpf, equipe) {
        try {
            if (!Utils.validarCPF(cpf)) return new Error('Cpf invalido !')
            const Lider = await Model.Criar(nome, cpf, equipe);
            console.log(Lider)
        } catch (error) {
            console.log(error)
        }
    }

    async CriarToken(nome, cpf, equipe) {
        try {
            if (!Utils.validarCPF(cpf)) return new Error('Cpf invalido !')
            const Lider = await Model.Buscar(nome, cpf);
            if (!Lider) return new Error('')
            const Token = Auth.CriarTokenLider(Lider);
            return {
                Token,
                Lider
            };
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Services()