
export default function MensagensEquipe({ mensagens }) {

    return (
        <section >
            <main>
                <div>
                    <label>Portugues</label>
                    {mensagens.map((mensagem) => (
                        <label>{mensagem}</label>
                    ))}
                </div>
                <div>
                    <label>Ingles</label>
                    {mensagens.map((mensagem) => (
                        <label>{mensagem}</label>
                    ))}
                </div>
            </main>
        </section >
    )
}