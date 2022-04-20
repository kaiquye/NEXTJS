import { useState } from "react";
import style from './enviarMensagem.module.css'

export default function FormularioLider({ enviar, id }) {

    const [mensagem, setMensagem] = useState();

    return (
        <section className={style.section_nova_mensagem} >
            <main>
                <div className={style.div_nova_mensagem} >
                    <label>Escreva sua mensagem, <strong>Lider</strong></label>
                    <input className={style.input_novamensagem} type='text' onChange={(e) => setMensagem(e.target.value)} />
                    <button onClick={() => enviar(mensagem, id)} >Nova Mensagem</button>
                    <button >Voltar</button>
                </div>
            </main>
        </section>
    )
}