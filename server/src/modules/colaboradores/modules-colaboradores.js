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
            const Evalido = await ConnectionDatabase('colaborador').select('acesso', 'Equipe_id').where('cpf', cpf);
            return Evalido
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar uma nova equipe')
        }
    }
}
module.exports = new Model();