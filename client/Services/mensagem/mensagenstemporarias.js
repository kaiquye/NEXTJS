import axios from 'axios'
import Api from '../api/server'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export async function BuscarMensagensTemporarias(equipe) {
    const cookies = parseCookies()
    const { token } = cookies;
    try {
        const mensagem = await Api.get(`/mensagenstemporarias/${equipe}`, {}, {
            headers: { 'x-custom-header': token }
        })
        return mensagem.data.Mensagem
    } catch (error) {
        console.log({ error })
    }
}