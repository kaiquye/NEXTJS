import axios from 'axios'
import Api from '../api/server'
export async function SingColaborador(nome, cpf) {
    try {
        const Data = await Api.post('/colaboradores/sing', {
            nome,
            cpf: "02154026699",
        })
        console.log('-----', Data)
        const { Token, acesso, Equipe_id, cpf, ok, id } = Data.data;
        if (!Token) {
            return false
        }
        return { Token, acesso, Equipe_id, cpf, ok, id }
    } catch (error) {
        console.log(error)
        return new Error('')
    }
}