const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(nome, cpf, equipe) {
        console.log(nome, cpf, equipe)
        try {
            await ConnectionDatabase('lider').insert({ Nome: nome, CPF: cpf, Equipe_id: equipe })
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar um noov lider')
        }
    }

    async Buscar(nome, cpf) {
        try {
            console.log(cpf)
            const Evalido = await ConnectionDatabase('lider').select('Equipe_id', 'Acesso').where('cpf', cpf)
            return Evalido[0];
        } catch (error) {
            console.log(error)
            return new Error('Não foi possivel criar um noov lider')
        }
    }
}
module.exports = new Model();