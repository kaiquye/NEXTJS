import axios from 'axios'
import Api from '../api/server'

export async function AuthUserToken(Token) {
    console.log('token', Token)
    try {
        const data = await Api.post('/auth/', {}, {
            headers: { 'x-custom-header': Token }
        })
        const { ok, Equipe_id, Acesso, cpf } = data.data;
        return { ok, Equipe_id, Acesso, cpf };
    } catch (error) {
        alert('ero')
        console.log({ error })
    }
}