import "./header.css"
import { useState, useContext} from "react";
import { Link, useParams } from 'react-router-dom';
import { UsuarioContext } from "../../../context/UsuarioContext";



function Header() {
    const {idUser} = useParams()
    const {usuarios}= useContext(UsuarioContext)

    

    return (
        <nav className="NavBar">
            <div>
                <Link to="/:idUser">Nome do projeto</Link>
                <Link to="/:idUser/listagem-exercicio">Cadastrar locais</Link>
                <Link to="/:idUser/cadastro-exercicio">Editar locais</Link>
            </div>

            <div>
                <p>Olá, </p>
                <Link to="/login">Sair</Link>
            </div>
        </nav>
    )
}


export default Header