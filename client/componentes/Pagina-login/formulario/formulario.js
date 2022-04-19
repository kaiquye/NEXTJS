import style from './formulario.module.css'
export default function FormularioLogin() {
    return (
        <section className={style.section_formulario}>
            <div className={style.div_abst_background}>
                ...
            </div>
            <main className={style.main_formulario}>
                <div className={style.titulo_formulario_wood}>
                    <h3>Wood Phoenix</h3>
                    <label>Mensagens da sorte</label>
                </div>
                <div className={style.titulo_formulario} >
                    <h1>Login</h1>
                </div>
                <div className={style.div_formulario}>
                    <label>Nome</label>
                    <input className={style.input_formulario} type='text' />
                    <label>CPF</label>
                    <input className={style.input_formulario} type='text' />
                </div>
                <div>
                    <label className={style.label_formulario_entrarcomo}>Entrar como</label>
                </div>
                <div>
                    <button className={style.button_formulario_colaborador} > Colaborador </button>
                    <button className={style.button_formulario_lider} > Lider </button>
                </div>
            </main>
        </section>
    )
}