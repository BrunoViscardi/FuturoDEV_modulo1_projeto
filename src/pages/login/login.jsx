import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { UsuarioContext } from "../../context/UsuarioContext";
import { AtivosContext } from "../../context/AtivosContext";
import "./login.css"



function PaginaLogin() {



    const { usuarios } = useContext(UsuarioContext)
    const { cadastrarUsuarioAtivo } = useContext(AtivosContext)



    const [usuarioLogin, setUsuarioLogin] = useState({
        email: "",
        senha: "",
        msgErro: false
    })




    function realizarLogin(usuarioLogin) {
        const email = usuarioLogin.email;
        const senha = usuarioLogin.senha;



        usuarios.map(user => {

            if (user.email == email && user.senha == senha) {
                localStorage.setItem("isAutenticado", true)
                window.location.href = "/" + user.id

                cadastrarUsuarioAtivo({ idUser: user.id, nome: user.nome })


            } else {
                setUsuarioLogin({ ...usuarioLogin, msgErro: true })
            }
        })

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

                            <span>
                            <div className="logoLogin"></div>
                            </span>


                            <p>!Bem-vindo de volta</p>


                            <form>
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

                                {usuarioLogin.msgErro == true && <div className="erroLogin">Usuário ou senha inválidos</div>}

                                <button type='button' onClick={() => realizarLogin(usuarioLogin)}> Entrar </button>
                            </form>



                            <p> É novo por aqui? <Link to="/cadastro-usuario" style={{ color: "#FFF7CD", textShadow: "1px 1px 2px gray" }}>Faça seu cadastro</Link></p>
                            


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginaLogin

