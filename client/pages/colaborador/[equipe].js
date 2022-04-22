import stlye from '../../styles/colaborador.module.css'
import FormularioColaborador from '../../componentes/pagina-colaborador/formulario-nova-mensagem'
import MensagensLider from '../../componentes/pagina-colaborador/mensagens-lider'
import MensagemTemporarias from '../../componentes/pagina-colaborador/mensagens-temporarias'
import { BuscarMensagens } from '../../Services/mensagem/buscarMensagens'
import { BuscarMensagensTemporarias } from '../../Services/mensagem/mensagenstemporarias'
import { AuthContext } from '../../context/Auth.js'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import nookies, { parseCookies } from 'nookies'

export default function Colaborador({ mensagemLider, mensagensEquipe }) {

    const { EnviarMensagemAlt, isAuth, AuthUser } = useContext(AuthContext)

    useEffect(() => {
        if (!isAuth) {
            (async () => {
                const cookies = parseCookies()
                const { ok } = await AuthUser(cookies.token)
                if (!ok) return router.push('/')
            })();
        }
    }, [])

    return (
        <section className={stlye.section_colaborador} >
            <main className={stlye.main}>
                <div className={stlye.div_formulario} >
                    <FormularioColaborador enviar={EnviarMensagemAlt} />
                </div>
                <div className={stlye.div_mensagem} >
                    <div className={stlye.div_mensagemLider} >
                        <p>Mensagem do lider</p>
                        <MensagensLider mensagemLider={mensagemLider} />
                    </div>
                    <div className={stlye.div_mensagemCola}>
                        <label>Mensagens da equipe</label>
                        <MensagemTemporarias mensagensEquipe={mensagensEquipe} />
                    </div>
                </div>
            </main>
        </section>
    )
}

// SSR - Server Sider Render
export async function getServerSideProps(ctx) {

    const cookies = nookies.get(ctx)
    if (!cookies.token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const data = await BuscarMensagens(ctx.query.equipe)
    const mensagemTm = await BuscarMensagensTemporarias(ctx.query.equipe)
    return {
        props: {
            mensagemLider: data[0].mensagem,
            mensagensEquipe: mensagemTm
        },
    }
}