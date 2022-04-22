import { AuthContext } from '../../context/Auth.js'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import nookies, { parseCookies } from 'nookies'

export default function Colaborador({ mensagemLider, mensagensEquipe }) {

    // const { EnviarMensagemAlt, isAuth, AuthUser } = useContext(AuthContext)

    useEffect(() => {
        // if (!isAuth) {
        //     (async () => {
        //         const cookies = parseCookies()
        //         const { ok } = await AuthUser(cookies.token)
        //         if (!ok) return router.push('/')
        //     })();
        // }
    }, [])

    return (
        <section className={stlye.section_colaborador} >
            <main className={stlye.main}>
              // lista de usuarios com funcoes para ativa/desativar. excluir
            </main>
        </section>
    )
}

// SSR - Server Sider Render
export async function getServerSideProps(ctx) {

    return {
        props: {
            Auth: true
        },
    }
}