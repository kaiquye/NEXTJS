import axios from 'axios'
import Api from '../api/server'
export async function EnviarMensagem(mensagens, equipe) {
    try {
        await Api.post('/mensagens', {
            mensagens, equipe
        })
    } catch (error) {
        console.log({ error })
        return new Error('')
    }
}