import axios from 'axios'
import Api from '../api/server'
export async function SignLider(nome, cpf) {
    try {
        const Data = await Api.post('/lider/sign', {
            nome,
            cpf,
        })
        const { Token } = Data.data;
        if (!Token) {
            return new Error('')
        }
        return Token
    } catch (error) {
        console.log(error)
        return new Error('')
    }
}