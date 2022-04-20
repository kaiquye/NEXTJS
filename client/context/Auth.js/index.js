import { createContext, useState } from 'react';
import { SingColaborador, SignLider, EnviarMensagem } from '../../Services/index.';
import { setCookie } from 'nookies'
import Router from 'next/router'

export const AuthContext = createContext({});


export default function AuthContextProvider({ children }) {

    const [equipe, setEquipe] = useState(0);

    async function singUserColaborador(nome, cpf) {
        const Token = await SingColaborador(nome, cpf);
        if (Token) {
            setCookie(Token.Token)
            setEquipe(Token.Equipe)
            setAuth(true)
            Router.push('/colaborador')
        }
    }

    async function signUserLider(nome, cpf) {
        const { Token, Lider } = await SignLider(nome, cpf);
        if (Token) {
            alert('token')
            setCookie(null, 'token', Token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            Router.push(`/lider/${Lider.Equipe_id}`)
        }
    }

    async function EnviarMensagemLider(mensagem, equipe) {
        alert(mensagem, equipe)
        console.log(mensagem, equipe)
        await EnviarMensagem(mensagem, equipe);
        window.location.reload();
    }

    return (
        <AuthContext.Provider value={{ singUserColaborador, signUserLider, EnviarMensagemLider }}>
            {children}
        </AuthContext.Provider>
    )
}
