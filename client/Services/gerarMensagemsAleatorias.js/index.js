// https://api.adviceslip.com/advice

import axios from 'axios'
export async function GerarMensagensAleatorias(nome, cpf) {
    try {
        const msg = await axios.get('https://api.adviceslip.com/advice');
        console.log(msg.data.slip.advice);
        return msg.data.slip.advice;
    } catch (error) {
        console.log(error)
    }
}