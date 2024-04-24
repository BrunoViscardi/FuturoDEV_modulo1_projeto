import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';


function PaginaLogin() {


    const { register, handleSubmit, formState: { errors } } = useForm();

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
                                {...register("emailLogin", {
                                    required: "campo obrigatório",
                                    maxLength: { value: 50, message: "Máximo de 50 caracteres permitidos" }
                                })}
                            />
                            {true && <p>{errors.emailLogin?.message}</p>}
                        </div>

                        <div className="campo">
                            <label htmlFor="senhaLogin">Senha</label>
                            <input type="password" placeholder="digite sua senha"
                                {...register("senhaLogin", {
                                    required: "campo obrigatório",
                                    maxLength: { value: 6, message: "Máximo de 6 caracteres permitidos" }
                                })}
                            />
                            {true && <p>{errors.senhaLogin?.message}</p>}
                        </div>

                        <button> Entrar </button>
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

