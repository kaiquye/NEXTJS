import axios from 'axios'
import Api from '../api/server'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export async function EnviarMensagem(mensagens, equipe) {
    const cookies = parseCookies()
    const { token } = cookies;
    console.log('tttttttttttttttttttttttt',token)
    try {
        await Api.post('/mensagens/', {
            mensagens, equipe,
        }, {
            headers: { 'x-custom-header': token }
        })
    } catch (error) {
        alert('ero')
        console.log({ error })
    }
}