import axios from 'axios'
import Api from '../api/server'
export async function SignLider(nome, cpf_user) {
    alert('lider2')
    try {
        const Data = await Api.post('/lideres/sing', {
            nome, cpf : cpf_user
        },{})
        const { Token, Equipe_id, Acesso, cpf } = Data.data;
        if (!Token) {
            return new Error('')
        } 
        return { Token, Equipe_id, Acesso, cpf }
    } catch (error) {
        alert(error.response.data.message)
        console.log(error)
        return new Error('')
    }
}