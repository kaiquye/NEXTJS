import { useState } from "react";

export default function FormularioLider({ enviar }) {

    const [mensagem, setMensagem] = useState();

    return (
        <section >
            <main>
                <div>
                    <label>Escreva sua mensagem, <strong>Lider</strong></label>
                    <input type='text' onChange={(e) => setMensagem(e.target.value)} />
                    <button onClick={() => enviar(mensagem)} >Enviar</button>
                </div>
            </main>
        </section>
    )
}