import nookies, { parseCookies } from 'nookies'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Auth.js/index.js'
import FormularioLider from '../../componentes/pagina-lider/formulario-nova-mensagem/index.js'
import MensagensEquipe from '../../componentes/mensagems-equipe/index.js'
import { useRouter } from 'next/router'
import { BuscarMensagens } from '../../Services/mensagem/buscarMensagens.js'
import { BuscarTodosColaboradores } from '../../Services/index..js'
import stlye from '../../styles/lider.module.css'

export default function Lider({ mensagens, lider, Colaborador }) {

    const router = useRouter()

    const { isAuth, singUserColaborador, AuthUser, signUserLider, cpf, equipe, EnviarMensagemLider } = useContext(AuthContext)

    useEffect(() => {
        alert(isAuth)
        if (!isAuth) {
            (async () => {
                const cookies = parseCookies()
                const { ok } = await AuthUser(cookies.token)
                if (!ok) return router.push('/')

            })();
        }
    }, [])

    return (
        <sectio className={stlye.section_lider} >
            <main className={stlye.main_lider} >
                <div className={stlye.menu_lider}>
                    <FormularioLider id={equipe} enviar={EnviarMensagemLider} />
                </div>
                <div>
                    <h3 style={{ textAlign: 'center', marginBottom: '10px', marginTop: '15px' }}>Suas mensagens</h3>
                    <MensagensEquipe mensagens={mensagens} />
                </div>
            </main>
        </sectio>
    )
}

// SSR - Server Sider Render
export async function getServerSideProps(ctx) {
    // pegar o token do cockiee
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
    if (data instanceof Error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {
        props: {
            mensagens: data,
        },
    }
}