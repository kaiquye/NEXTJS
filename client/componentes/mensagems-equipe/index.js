import stlye from './mensagem.module.css'

export default function MensagensEquipe({ mensagens }) {

    return (
        <section className={stlye.section_mensagem} >
            <main className={stlye.main_mensagem} >
                <div className={stlye.div_mensagem_pt} >
                    <h1>PT-BR</h1>
                    {mensagens.map((msg, index1) => (
                        <section>
                            <p >Mensagem : </p>
                            <h1 style={{ marginBottom: '10px' }} key={index1} >{msg.mensagem}</h1>
                        </section>
                    ))}
                </div>
                <div className={stlye.div_mensagem_in} >
                    <h1>IN</h1>
                    {mensagens.map((msg, index2) => (
                        <section>
                            <p>Message : </p>
                            <h1 style={{ marginBottom: '10px' }} key={index2} >{msg.mensagem}</h1>
                        </section>
                    ))}
                </div>
            </main>
        </section >
    )
}