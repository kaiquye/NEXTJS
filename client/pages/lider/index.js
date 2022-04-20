import nookies from 'nookies'
import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.js'
import FormularioLider from '../../componentes/pagina-lider/formulario-nova-mensagem/index.js'
import MensagensEquipe from '../../componentes/mensagems-equipe/index.js'

export default function Lider({ mensagens }) {

    const { EnviarMensagemLider } = useContext(AuthContext)

    return (
        <sectio>
            <main>
                <div>
                    {/* <MensagensEquipe /> */}
                </div>
                <div>
                    <FormularioLider enviar={EnviarMensagemLider} />
                </div>
                <div>
                    // equipes
                </div>
            </main>
        </sectio>
    )
}

// SSR - Server Sider Render
export async function getServerSideProps(ctx) {
    // pegar o token do cockiee
    const cookies = nookies.get(ctx)
    if (!cookies.mensagensDaSorte) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {
        props: {
            auth: true
        },
    }
}