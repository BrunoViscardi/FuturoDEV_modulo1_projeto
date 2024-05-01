import { createContext, useEffect, useState } from "react";

export const AtivosContext = createContext()

export const AtivosContextProvider = ({ children }) => {

    const [usuariosAtivos, setUsuariosAtivos] = useState({
        idUser: "",
        nome: ""
    })


    useEffect(() => {
        lerUsuariosAtivos()
    }, [])




    async function lerUsuariosAtivos() {
        try {
            const response = await fetch("http://localhost:3000/usuariosAtivos");
            const data = await response.json();
            await setUsuariosAtivos(data);

        }
        catch (error) {
            console.error('Falha ao ler usuários ativos', error)
        }
    }




    function cadastrarUsuarioAtivo(novoUsuarioAtivo) {
        fetch("http://localhost:3000/usuariosAtivos", {
            method: "POST", // cadastrar
            body: JSON.stringify(novoUsuarioAtivo),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                lerUsuariosAtivos()
            })
            .catch(console.log("Erro ao cadastrar usuário ativo"))
    }



    function deletarUsuarioAtivo(id) {
        fetch("http://localhost:3000/usuariosAtivos/" + id, {
            method: "DELETE", // deletar
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                lerUsuariosAtivos()
            })
            .catch(console.log("Erro ao deletar usuário ativo"))
    }







    return (
        <AtivosContext.Provider value={{ usuariosAtivos, setUsuariosAtivos, cadastrarUsuarioAtivo, deletarUsuarioAtivo }}>
            {children}
        </AtivosContext.Provider>
    )


}