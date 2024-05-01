import { useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { UsuarioContext } from "../../context/UsuarioContext";
import { AtivosContext } from "../../context/AtivosContext";



function PaginaLogin() {

    

    const {usuarios}= useContext(UsuarioContext)
    const {cadastrarUsuarioAtivo}=useContext(AtivosContext)



    const [usuarioLogin, setUsuarioLogin] = useState({
        email: "",
        senha: "",
        msgErro: false
    })

    

    
    function realizarLogin(usuarioLogin) {
        const email=usuarioLogin.email;
        const senha=usuarioLogin.senha;
        

        
        usuarios.map(user=>{
            
            if (user.email == email && user.senha == senha) {
                localStorage.setItem("isAutenticado", true)
                window.location.href="/"+user.id           

                cadastrarUsuarioAtivo({idUser: user.id, nome: user.nome})

                            
            } else{
                setUsuarioLogin({ ...usuarioLogin, msgErro: true })
            }
        })
        
    }

    



    return (
        <>
            <div>
                <div>

                </div>
                <div>
                    <h1>nome do projeto</h1>
                    <p>Bem-vindo de volta</p>


                    <form>
                        <div className="campo">
                            <label htmlFor="emailLogin">Email</label>
                            <input type="email" placeholder="digite seu email"
                                onChange={(e) => setUsuarioLogin({ ...usuarioLogin, email: e.target.value })}
                            />
                            
                        </div>

                        <div className="campo">
                            <label htmlFor="senhaLogin">Senha</label>
                            <input type="password" placeholder="digite sua senha"
                                onChange={(e) => setUsuarioLogin({ ...usuarioLogin, senha: e.target.value })}
                            />
                        </div>

                        {usuarioLogin.msgErro == true && <p>Usuário ou senha inválidos</p>}

                        <button type='button' onClick={()=>realizarLogin(usuarioLogin)}> Entrar </button>
                    </form>


                    <div>
                        <p> É novo por aqui? <Link to="/cadastro-usuario">Faça seu cadastro</Link> </p>
                    </div>



                </div>
            </div>
        </>
    )
}

export default PaginaLogin

