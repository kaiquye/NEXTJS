import style from './lider.module.css'

export default function MensagemTemporarias({ mensagensEquipe }) {

    return (
        <div className={style.main} >
            {mensagensEquipe.map((mensagem) => (
                <div className={style.div}>
                    <h5>{mensagem.mensagem}</h5>
                </div>
            ))
            }
        </div>
    )
}