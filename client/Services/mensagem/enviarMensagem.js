import axios from 'axios'
import Api from '../api/server'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export async function EnviarMensagem(mensagens, equipe, cpf) {
    const cookies = parseCookies()
    const { token } = cookies;
    try {
        await Api.post('/mensagens/', {
            mensagens, equipe, cpf
        }, {
            headers: { 'x-custom-header': token }
        })
    } catch (error) {
        alert('ero')
        console.log({ error })
    }
}