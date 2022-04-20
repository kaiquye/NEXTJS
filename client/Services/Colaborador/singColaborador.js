import axios from 'axios'
import Api from '../api/server'
export async function SingColaborador(nome, cpf) {
    try {
        const Data = await Api.post('/colaboradores/sing', {
            nome,
            cpf,
        })
        const { Token } = Data.data;
        if (!Token) {
            return new Error('')
        }
        return Data.data
    } catch (error) {
        console.log(error)
        return new Error('')
    }
}