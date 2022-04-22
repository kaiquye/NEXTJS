import { useState } from "react";
import { GerarMensagensAleatorias } from "../../../Services/gerarMensagemsAleatorias.js";
import style from './enviarMensagem.module.css'

export default function FormularioColaborador({ enviar, id, cpf }) {

    const [mensagem, setMensagem] = useState();

    return (
        <section className={style.section_nova_mensagem} >
            <main>
                <div className={style.div_nova_mensagem} >
                    <label>Gerar nova mensagem</label>
                    <input className={style.input_novamensagem} type='text' disabled value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                    <button onClick={async () => setMensagem(await GerarMensagensAleatorias())} >Gerar nova mensagem</button>
                    <button onClick={() => enviar(mensagem)} >Enviar</button>
                </div>
            </main>
        </section>
    )
}