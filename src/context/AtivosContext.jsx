import { createContext, useEffect, useState } from "react";

export const AtivosContext = createContext()

export const AtivosContextProvider = ({ children }) => {

    const [usuariosAtivos, setUsuariosAtivos] = useState({
        idUser:"",
        nome:""
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
        catch (error){
            console.error('Falha ao ler usuários ativos', error)
        }
    }




    function cadastrarUsuarioAtivo(novoUsuarioAtivo){
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
        .catch(() => alert("Erro ao cadastrar usuário ativo"))
      }
    
    





    return (
        <AtivosContext.Provider value={{usuariosAtivos, setUsuariosAtivos, cadastrarUsuarioAtivo}}>
            {children}
        </AtivosContext.Provider>
    )


}