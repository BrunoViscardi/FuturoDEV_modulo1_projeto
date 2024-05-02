import "./header.css"
import { useState, useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { UsuarioContext } from "../../../context/UsuarioContext";
import { useEffect } from "react";
import { AtivosContext } from "../../../context/AtivosContext";



function Header() {
    const { idUser } = useParams()
    const { Sair } = useContext(AtivosContext)
    const { usuarios } = useContext(UsuarioContext)


    useEffect(() => {
        const usuarioLogado = usuarios.find(pessoa => pessoa.id == idUser)
        if (usuarioLogado) {
            setNome({ nome: usuarioLogado.nome })
        }
    }, [idUser, usuarios])







    const [nome, setNome] = useState({
        nome: ""
    })










    return (
        <nav className="NavBar">
            <div>
                <div className="LogoHeader"></div>
                

                <Link to={`/${idUser}`}>HOME</Link>
                <Link to={`/${idUser}/cadastro-exercicio`}>Cadastrar locais</Link>
                <Link to={`/${idUser}/listagem-exercicio`}>Editar locais</Link>
            </div>

            <div>
                <span>Olá, {nome.nome}</span>
                <p onClick={() => Sair(idUser)}>Sair</p>
            </div>
        </nav>
    )
}


export default Header