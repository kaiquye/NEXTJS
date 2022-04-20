import axios from 'axios'
import Api from '../api/server'
export async function SignLider(nome, cpf) {
    alert('lider2')
    try {
        const Data = await Api.post('/lideres/sing', {
            nome,
            cpf: "02154026699",
        })
        const { Token, Lider } = Data.data;
        if (!Token) {
            return new Error('')
        }
        return { Token, Lider }
    } catch (error) {
        console.log(error)
        return new Error('')
    }
}