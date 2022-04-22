const { ConnectionDatabase } = require('../../database/index');


class Model {

    async Criar(mensagens, equipe, dataPublicacao, colaborador) {
        const sql = 'select count(id) as qts from mensagens_temporaria where datediff(now(), dataPublicacao) <= 0  and Colaborador_id = ?;'

        try {
            return await ConnectionDatabase.transaction(async (trx) => {
                const qtsMsg = await ConnectionDatabase.raw(sql, [colaborador]).transacting(trx)
                console.log(qtsMsg[0][0].qts)
                if (qtsMsg[0][0].qts < 4) {
                    await ConnectionDatabase('mensagens_temporaria').transacting(trx).insert({ mensagem: mensagens, Equipe_id: equipe, dataPublicacao, Colaborador_id: colaborador })
                } else {
                    return new Error('Aviso, numero de mensagens esgotado.....');
                }
            })
        } catch (error) {
            console.log(error)
            throw new Error('Não foi possivel salvar a nova mensagem')
        }
    }

    async Buscar(equipe) {
        try {
            const sql = 'select mensagem from mensagens_temporaria where datediff(now(), dataPublicacao) <= 4 and Equipe_id = ?'
            const Mensagens = await ConnectionDatabase.raw(sql, [equipe]);
            return Mensagens[0]
        } catch (error) {
            console.log(error)
            throw new Error('Não foi possivel salvar a nova mensagem')
        }
    }
}
module.exports = new Model();