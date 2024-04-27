import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext()

export const UsuarioContextProvider = ({ children }) => {
    
    const [usuarios, setUsuarios] = useState([])
    

    useEffect(() => {
        lerUsuarios()
    }, [])

    async function lerUsuarios() {
        try {
            const response = await fetch("http://localhost:3000/usuarios");
            const data = await response.json();
            await setUsuarios(data);
            
        }
        catch (error){
            console.error('Falha ao ler usuários', error)
        }
    }


    function cadastrarUsuario(novoUsuario){
        fetch("http://localhost:3000/usuarios", {
          method: "POST", // cadastrar
          body: JSON.stringify(novoUsuario),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          alert("Usuário cadastrado")
          lerUsuarios()
        })
        .catch(() => alert("Erro ao cadastrar usuário"))
      }

      





    return (
        <UsuarioContext.Provider value={{cadastrarUsuario,usuarios}}>
            {children}
        </UsuarioContext.Provider>
    )


}