const Model = require('./modules-colaboradores');
const Utils = require('./Utils')
const NovoToken = require('../../middlewares/Auth')

class Services {

    async Criar(nome, cpf, equipe) {
        try {
            if (!Utils.validarCPF(cpf)) {
                return new Error('Cpf invalido.')
            }
            return await Model.Criar(nome, cpf, equipe);
        } catch (error) {
            console.log(error)
        }
    }

    async Buscar(nome, cpf) {
        try {
            if (!Utils.validarCPF(cpf)) {
                return new Error('Cpf invalido.')
            }
            const Acesso = await Model.Buscar(nome, cpf);
            if (!Acesso) throw new Error('Usuario não foi encontrado')
            const Token = NovoToken.CriarTokenColaborador(Acesso);
            return { Token, Acesso };
        } catch (error) {
            console.log(error)
            throw new Error('Usuario não foi encontrado')
        }
    }

    async BuscarTodos(id) {
        try {
            const Colaboradores = await Model.BuscarTodos(id);
            return Colaboradores
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Services()