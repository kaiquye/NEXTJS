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
            if (!Acesso) throw new Error('')
            console.log(Acesso[0].Equipe_id)
            const Token = NovoToken.CriarTokenColaborador(Acesso.acesso);
            return { Token, equipe: Acesso[0].Equipe_id };
        } catch (error) {
            console.log(error)
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