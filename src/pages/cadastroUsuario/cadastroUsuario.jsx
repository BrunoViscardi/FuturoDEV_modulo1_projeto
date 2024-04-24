import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';



function PaginaCadastroUsuario() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function sendCadastroUsuario(formValue) {
        console.log(formValue)
    }

    return (
        <>
            <h1>Cadastre-se</h1>
            <p>crie uma conta para encontrar um local de atividade física próximo</p>

            <form onSubmit={handleSubmit(sendCadastroUsuario)}>

                <div className="campo">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" placeholder="digite seu primeiro nome"
                        {...register("nome", {
                            required: "campo obrigatório",
                            maxLength: { value: 15, message: "Máximo de 15 caracteres permitidos" }
                        })}
                    />
                    {errors?.nome && <p>{errors.nome?.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" placeholder="digite seus sobrenomes"
                        {...register("sobrenome", {
                            required: "campo obrigatório",
                            maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                        })}
                    />
                    {errors?.sobrenome && <p>{errors.sobrenome?.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="sexo">Sexo</label>
                    <div>
                        <input {...register("sexo", { required: "campo obrigatório" })} type="radio" value="Homem" />
                        <label htmlFor="Homem">Homem</label>
                        <input {...register("sexo", { required: "campo obrigatório" })} type="radio" value=" Mulher" />
                        <label htmlFor="Mulher">Mulher</label>
                        <input {...register("sexo", { required: "campo obrigatório" })} type="radio" value=" Não binário" />
                        <label htmlFor="NaoBinario">Não binário</label>
                        {errors?.sexo && <p>{errors.sexo?.message}</p>}
                    </div>
                </div>

                <div className="campo">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" placeholder="digite seu CPF"
                        {...register("cpf", {
                            required: "campo obrigatório",
                            pattern: {
                                value: /^[0-9]{11}$/,
                                message: "CPF deve conter 11 números"
                            }
                        })}
                    />
                    {errors?.cpf && <p>{errors.cpf?.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="nascimento">Data de nascimento</label>
                    <input type="date"
                        {...register("nascimento", {
                            required: "campo obrigatório"
                        })}
                    />
                    {errors?.sobrenome && <p>{errors.sobrenome?.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="digite seu email, necessário para login"
                        {...register("email", {
                            required: "campo obrigatório",
                            maxLength: { value: 50, message: "Máximo de 50 caracteres permitidos" }
                        })}
                    />
                    {errors?.email && <p>{errors.email?.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="senha">Senha</label>
                    <input type="text" placeholder="crie uma senha com 6 dígitos "
                        {...register("senha", {
                            required: "campo obrigatório",
                            pattern: {
                                value: /^(?=.*\d)(?=.*[A-Z]).{6,}$/,
                                message: "senha deve conter 6 dígitos com pelo menos um número e uma letra maiúscula"
                            }
                        })}
                    />
                    {errors?.senha && <p>{errors.senha?.message}</p>}
                </div>

                <div>
                <div className="campo">
                    <label htmlFor="cep">CEP</label>
                    <input type="text" placeholder="digite seu CEP"
                        {...register("cep", {
                            required: "campo obrigatório",
                            pattern: {
                                value: /^[0-9]{8}$/,
                                message: "CEP deve conter 8 números"
                            }
                        })}
                    />
                    {errors?.cep && <p>{errors.cep?.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="rua">Rua</label>
                    <input type="text" value={"rua"} 
                        {...register("rua", {
                            required: "campo obrigatório",
                            maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                        })}
                    />
                    {errors?.rua && <p>{errors.rua.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="numero">Número</label>
                    <input type="text" placeholder="digite o número da residência"
                        {...register("numero", {
                            required: "campo obrigatório",
                            maxLength: { value: 10, message: "Máximo de 10 caracteres permitidos" }
                        })}
                    />
                    {errors?.numero && <p>{errors.numero.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="complemento">Complemento</label>
                    <input type="text" placeholder="digite o complemento"
                        {...register("complemento", {
                            maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                        })}
                    />
                    {errors?.complemento && <p>{errors.complemento.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" defaultValue={"cidade"}
                        {...register("cidade", {
                            required: "campo obrigatório",
                            maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                        })}
                    />
                    {errors?.cidade && <p>{errors.cidade.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="estado">Estado</label>
                    <input type="text" defaultValue={"UF"}
                        {...register("estado", {
                            required: "campo obrigatório",
                            maxLength: { value: 2, message: "Máximo de 2 caracteres permitidos" }
                        })}
                    />
                    {errors?.estado && <p>{errors.estado.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" defaultValue={"bairro"}
                        {...register("bairro", {
                            required: "campo obrigatório",
                            maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                        })}
                    />
                    {errors?.bairro && <p>{errors.bairro.message}</p>}
                </div>

                

                </div>




                <button type="submit">Cadastrar</button>
            </form>


        </>
    )
}

export default PaginaCadastroUsuario