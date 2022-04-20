import nookies from 'nookies'

export default function Colaborador() {
    return (
        <sectio>
            <main>
                <h1>cl</h1>
                <div>
                    <MensagensColaborador mensagensPt={mensagensPt} mensagensIng={mensagensIng} />
                </div>
                <div>
                    <NovaMensagemColaborador enviar={enviar} />
                </div>
            </main>
        </sectio>
    )
}

// SSR - Server Sider Render
export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx)
    if (!cookies.Token) {
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