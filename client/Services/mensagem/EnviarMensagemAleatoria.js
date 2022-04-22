import axios from 'axios'
import Api from '../api/server'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export async function EnviarMensagemAleatoria(mensagens, equipe, colaborador) {
    const cookies = parseCookies()
    const { token } = cookies;
    try {
        await Api.post('/mensagenstemporarias/', {
            mensagens, equipe, colaborador
        }, {
            headers: { 'x-custom-header': token }
        })
        return true
    } catch (error) {
        alert(error.response.data.error)
        console.log({ error })
        return false
    }
}