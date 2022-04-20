import { createContext, useState } from 'react';
import { SingColaborador, SignLider, EnviarMensagem } from '../../Services/index.';
import { setCookie } from 'nookies'
import Router from 'next/router'
import { AuthUserToken } from '../../Services/AuthUserToken';

export const AuthContext = createContext({});


export default function AuthContextProvider({ children }) {

    const [equipe, setEquipe] = useState();
    const [cpf, setCpf] = useState();
    const [isAuth, setIsAuth] = useState(false);

    async function singUserColaborador(nome, cpf) {
        setCpf(cpf)
        const Token = await SingColaborador(nome, cpf);
        if (Token) {
            setCookie(Token.Token)
            setEquipe(Token.Equipe)
            setIsAuth(true);
            setAuth(true)
            Router.push('/colaborador')
        }
    }

    async function signUserLider(nome, cpf) {
        const { Token, Lider } = await SignLider(nome, cpf);
        if (Token) {
            alert('token')
            setIsAuth(true);
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

    async function AuthUser(Token) {
        const { ok, Equipe_id, Acesso, cpf } = await AuthUserToken(Token);
        if (ok) {
            setCpf(cpf);
            setEquipe(Equipe_id);
        }
        return { ok };
    }

    return (
        <AuthContext.Provider value={{ isAuth, singUserColaborador, AuthUser, signUserLider, cpf, equipe, EnviarMensagemLider }}>
            {children}
        </AuthContext.Provider>
    )
}
