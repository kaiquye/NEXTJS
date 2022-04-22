import style from './lider.module.css'

export default function MensagensLider({ mensagemLider }) {

    return (
        <div className={style.div}>
            <h3>{mensagemLider}</h3>
        </div>
    )
}