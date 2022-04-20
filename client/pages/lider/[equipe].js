import nookies from 'nookies'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/Auth.js/index.js'
import FormularioLider from '../../componentes/pagina-lider/formulario-nova-mensagem/index.js'
import MensagensEquipe from '../../componentes/mensagems-equipe/index.js'
import { useRouter } from 'next/router'
import { BuscarMensagens } from '../../Services/mensagem/buscarMensagens.js'
import { BuscarTodosColaboradores } from '../../Services/index..js'
import stlye from '../../styles/lider.module.css'
import Tabela from '../../componentes/tabela-equipe/index.js'
export default function Lider({ mensagens, lider, Colaborador }) {

    const router = useRouter()

    const equipe = router.query.equipe

    const { EnviarMensagemLider } = useContext(AuthContext)

    return (
        <sectio className={stlye.section_lider} >
            <main className={stlye.main_lider} >
                <div className={stlye.menu_lider}>
                    <div className={stlye.menu_buttons}>
                        <button>Novo Lider</button>
                        <button>Mensagem aleatória</button>
                    </div>
                    <FormularioLider id={equipe} enviar={EnviarMensagemLider} />
                </div>
                <div>
                    <MensagensEquipe mensagens={mensagens} />
                </div>
                <div className={stlye.lista_participantes} >
                    <h2>Participantes</h2>
                    <Tabela colaboradores={Colaborador.Colaboradores} lider={'2'} />
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
    const colaboradores = await BuscarTodosColaboradores(ctx.query.equipe);
    return {
        props: {
            mensagens: data,
            Colaborador: colaboradores.data
        },
    }
}