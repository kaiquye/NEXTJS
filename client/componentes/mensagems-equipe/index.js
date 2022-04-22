import style from './mensagem.module.css'

export default function MensagemTemporarias({ mensagensEquipe, mensagemLider }) {

    return (
        <section className={style.section} >
            <div className={style.div1}>
                <p style={{ marginBottom: '5px', marginTop: '5px' }} >Mensagem do lider</p>
                <label>{mensagemLider.mensagem}</label>
            </div>
            <div className={style.div}>
                {mensagensEquipe.map((mensagem) => (
                    <div className={style.div2}>
                        <p style={{ marginBottom: '5px', marginTop: '5px', fontSize : '10px' }}>Equipe</p>
                        <h5>{mensagem.mensagem}</h5>
                    </div>
                ))
                }
            </div>
        </section>
    )
}