import style from './tabela.module.css'

export default function Tabela({ colaboradores, lider }) {

    return (
        <table className={style.tabela_partcipantes} >
            <tbody className={style.body}  >
                <tr>
                    <th>Nome</th>
                    <th>Equipe</th>
                </tr>
                {colaboradores.map((colaborador, index) => (
                    <tr className={style.tr_colaborador}  >
                        <>
                            <td key={index}>{colaborador.Nome}</td>
                            <td key={index}>{colaborador.Acesso}</td>
                        </>

                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}