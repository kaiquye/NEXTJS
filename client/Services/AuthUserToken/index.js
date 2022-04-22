import axios from 'axios'
import Api from '../api/server'

export async function AuthUserToken(Token) {
    console.log('token', Token)
    try {
        const data = await Api.post('/auth/', {}, {
            headers: { 'x-custom-header': Token }
        })
        console.log('dataaa', data)
        const { ok, Equipe_id, Acesso, cpf, id } = data.data;
        return { ok, Equipe_id, Acesso, cpf, id };
    } catch (error) {
        alert('ero')
        console.log({ error })
    }
}