import { createContext, useState } from 'react';
import { SingColaborador, SignLider, EnviarMensagem } from '../../Services/index.';
import { setCookie } from 'nookies'
import Router from 'next/router'
import { AuthUserToken } from '../../Services/AuthUserToken';
import { EnviarMensagemAleatoria } from '../../Services/mensagem/EnviarMensagemAleatoria';

export const AuthContext = createContext({});


export default function AuthContextProvider({ children }) {

    const [equipe, setEquipe] = useState();
    const [cpf, setCpf] = useState();
    const [isAuth, setIsAuth] = useState(false);
    const [idColaborador, setIdColaborador] = useState();

    async function singUserColaborador(nome, cpf) {
        setCpf(cpf)
        const { Token, acesso, Equipe_id, ok, id } = await SingColaborador(nome, cpf);
        if (Token) {
            alert(Token)
            setIsAuth(true);
            setEquipe(Equipe_id);
            setIdColaborador(id)
            setCookie(null, 'token', Token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            Router.push(`/colaborador/${Equipe_id}`)
        }
    }

    async function signUserLider(nome, cpf) {
        const { Token, Equipe_id } = await SignLider(nome, cpf);
        if (Token) {
            alert('token')
            setIsAuth(true);
            setEquipe(Equipe_id)
            setCpf(cpf)
            setCookie(null, 'token', Token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            Router.push(`/lider/${Equipe_id}`)
        }
    }

    async function EnviarMensagemLider(mensagem, equipe) {
        alert(mensagem, equipe)
        console.log(mensagem, equipe)
        await EnviarMensagem(mensagem, equipe);
        window.location.reload();
    }

    async function AuthUser(Token) {
        const { ok, Equipe_id, Acesso, cpf, id } = await AuthUserToken(Token);
        console.log(id)
        if (ok) {
            setCpf(cpf);
            setEquipe(Equipe_id);
            setIdColaborador(id);
        }
        return { ok };
    }

    async function NovaMensagemAleatoria(mensagem, equipe) {
        alert(mensagem, equipe)
        console.log(mensagem, equipe)
        await EnviarMensagemAleatoria(mensagem, equipe);
        window.location.reload();
    }

    async function EnviarMensagemAlt(mensagem) {
        const msg = await EnviarMensagemAleatoria(mensagem, equipe, idColaborador);
        if (msg) {
            window.location.reload();
        }
    }

    return (
        <AuthContext.Provider value={{ isAuth, singUserColaborador, EnviarMensagemAlt, NovaMensagemAleatoria, AuthUser, signUserLider, cpf, equipe, EnviarMensagemLider }}>
            {children}
        </AuthContext.Provider>
    )
}
