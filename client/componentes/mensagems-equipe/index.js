import stlye from './mensagem.module.css'

export default function MensagensEquipe({ mensagens }) {

    return (
        <section className={stlye.section_mensagem} >
            <main className={stlye.main_mensagem} >
                <div className={stlye.div_mensagem_pt} >
                    <h1>PT-BR</h1>
                    {mensagens.map((msg, index1) => (
                        <>
                            <p >Mensagem : </p>
                            <label style={{ marginBottom: '10px' }} key={index1} >{msg.mensagem}</label>
                        </>
                    ))}
                </div>
                <div className={stlye.div_mensagem_in} >
                    <h1>IN</h1>
                    {mensagens.map((msg, index2) => (
                        <>
                            <p>Message : </p>
                            <label style={{ marginBottom: '10px' }} key={index2} >{msg.mensagem}</label>
                        </>
                    ))}
                </div>
            </main>
        </section >
    )
}