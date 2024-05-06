import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { UsuarioContext } from "../../context/UsuarioContext";
import { AtivosContext } from "../../context/AtivosContext";
import "./login.css"
import Cbutton from "../../components/atoms/button/Cbutton";



function PaginaLogin() {



    const { usuarios } = useContext(UsuarioContext)
    const { cadastrarUsuarioAtivo } = useContext(AtivosContext)



    const [usuarioLogin, setUsuarioLogin] = useState({
        email: "",
        senha: "",
        msgErro: ""
    })




    function realizarLogin(usuarioLogin) {
        const email = usuarioLogin.email;
        const senha = usuarioLogin.senha;

        const usuario = usuarios.find(user => user.email == email && user.senha == senha);

        if (usuario) {
            localStorage.setItem("isAutenticado", true)
            window.location.href = "/" + usuario.id
            setUsuarioLogin({ ...usuarioLogin, msgErro: "false" })
            cadastrarUsuarioAtivo({ idUser: usuario.id, nome: usuario.nome })

        } else {
            setUsuarioLogin({ ...usuarioLogin, msgErro: "true" })
        }
    }







    return (
        <>
            <div className="containerLogin">

                <div className="conteudoLogin">

                    <div className="containerRetangulo">
                        <div className="nomeProjeto">
                            <h1>OLYMPYAN</h1>
                            <p>project</p>
                        </div>


                    </div>
                    <div className="containerAcesso">
                        <div className="conteudoAcesso">




                            <p>!Bem-vindo de volta</p>


                            <form className="formLogin">
                                <div className="campoLogin">
                                    <label htmlFor="emailLogin">Email</label>
                                    <input type="email" placeholder="digite seu email"
                                        onChange={(e) => setUsuarioLogin({ ...usuarioLogin, email: e.target.value })}
                                    />

                                </div>

                                <div className="campoLogin">
                                    <label htmlFor="senhaLogin">Senha</label>
                                    <input type="password" placeholder="digite sua senha"
                                        onChange={(e) => setUsuarioLogin({ ...usuarioLogin, senha: e.target.value })}
                                    />
                                </div>

                                {usuarioLogin.msgErro == "true" && <div className="erroLogin">Usuário ou senha inválidos</div>}


                                <Cbutton type='button' estilo="Contained" onClick={() => realizarLogin(usuarioLogin)}> Entrar</Cbutton>


                            </form>

                            <div className="hr-container">
                                <hr className="hr-left" />
                                <span className="hr-text">ou</span>
                                <hr className="hr-right" />
                            </div>

                            <Link to="/cadastro-usuario">
                                <Cbutton type='button' estilo="OutlinedLogin" onClick={() => realizarLogin(usuarioLogin)}> Cadastrar-se</Cbutton>
                            </Link>







                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginaLogin

