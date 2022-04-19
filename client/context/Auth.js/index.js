import { createContext, useState } from 'react'

export const AuthContext = createContext({});


export default function AuthContextProvider({ children }) {

    const [Colaborador, setColaborador] = useState();
    const [Lider, setLider] = useState();

    async function singUserColaborador() {
        //login colaboradores
        // quando a pagina de colaboradores for carregada...

    }

    async function singUserLider() {
        //login lider
        // quando a pagina de lider for carregada...
        // login - LocalStorage - funcão do next.js carrega antes da pagina, server in page - Verify token

    }


    return (
        <AuthContext.Provider value={{ singUserColaborador, Colaborador }}>
            {children}
        </AuthContext.Provider>
    )
}
