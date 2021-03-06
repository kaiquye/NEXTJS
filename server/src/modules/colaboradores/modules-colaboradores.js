const { ConnectionDatabase } = require('../../database/index');
class Model {

    async Criar(nome, cpf, equipe) {
        try {
            const VerificarColaborador = await ConnectionDatabase('colaborador').select('id').where('cpf', cpf)
            if (VerificarColaborador[0]) return new Error('Colaborador ja cadastrado.')
            await ConnectionDatabase('colaborador').insert({ nome, cpf, Equipe_id: equipe })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar uma nova equipe')
        }
    }

    async Buscar(nome, cpf) {
        console.log(cpf)
        try {
            const Evalido = await ConnectionDatabase('colaborador').select('id', 'acesso', 'Equipe_id', 'cpf').where('cpf', cpf);
            console.log(Evalido)
            return Evalido[0]
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar uma nova equipe')
        }
    }

    async BuscarTodos(id) {
        try {
            const Colaboradores = await ConnectionDatabase('colaborador').select('*').where('Equipe_id', id);
            console.log(Colaboradores)
            return Colaboradores
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar uma nova equipe')
        }
    }
}
module.exports = new Model();