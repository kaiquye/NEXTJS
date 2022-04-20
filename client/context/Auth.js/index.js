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
            Router.push('/colaborador')
        }
    }

    async function signUserLider(nome, cpf) {
        const Token = await SignLider(nome, cpf);
        if (Token) {
            setCookie(Token.Token)
            setEquipe(Token.Equipe)
            Router.push('/lider')
        }
    }

    async function EnviarMensagemLider(mensagem) {
        await EnviarMensagem(mensagem, equipe);
    }

    return (
        <AuthContext.Provider value={{ singUserColaborador, signUserLider, EnviarMensagemLider }}>
            {children}
        </AuthContext.Provider>
    )
}
