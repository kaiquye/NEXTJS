import nookies, { parseCookies } from 'nookies'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Auth.js/index.js'
import FormularioLider from '../../componentes/pagina-lider/formulario-nova-mensagem/index.js'
import MensagensEquipe from '../../componentes/mensagems-equipe/index.js'
import { useRouter } from 'next/router'
import { BuscarMensagens } from '../../Services/mensagem/buscarMensagens.js'
import { BuscarTodosColaboradores } from '../../Services/index..js'
import stlye from '../../styles/lider.module.css'
import { BuscarMensagensTemporarias } from '../../Services/mensagem/mensagenstemporarias.js'

export default function Lider({ mensagens, mensagemLider, Colaborador }) {

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
                    <FormularioLider id={equipe} cpf={cpf} enviar={EnviarMensagemLider} />
                </div>
                <div  style={{marginTop : '20px'}} >
                    <MensagensEquipe mensagemLider={mensagemLider} mensagensEquipe={mensagens} />
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
    const mensagemTm = await BuscarMensagensTemporarias(ctx.query.equipe)
    const data = await BuscarMensagens(ctx.query.equipe)
    console.log(data)
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
            mensagemLider: data[0],
            mensagens: mensagemTm
        },
    }
}