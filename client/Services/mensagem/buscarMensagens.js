import axios from 'axios'
import Api from '../api/server'
export async function BuscarMensagens(equipe) {
    try {
        const date = await Api.get(`/mensagens/${equipe}`)
        console.log('menss', date.data.message)
        return date.data.message
    } catch (error) {
        console.log('eeeeeeeeeeeee', error)
        return new Error()
    }
}