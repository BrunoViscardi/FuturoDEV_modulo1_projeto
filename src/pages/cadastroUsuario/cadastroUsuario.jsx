import { useForm } from "react-hook-form"
import useCEP from "../../fetchs/useCEP";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useContext, useEffect } from "react";
import "./cadastroUsuario.css"
import Cbutton from "../../components/atoms/button/Cbutton";




function PaginaCadastroUsuario() {

    const { cadastrarUsuario, usuarios } = useContext(UsuarioContext)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();



    async function consultaCEP(cep) {
        try {
            const dados = await useCEP(cep)

            setValue('rua', dados.rua);
            setValue('cidade', dados.cidade);
            setValue('bairro', dados.bairro);
            setValue('estado', dados.estado);
        }
        catch (error) {
            console.error('Erro ao consultar o CEP:', error);
        }
    }


    //Para adicionar a cor verde só ao body dessa página
    useEffect(() => {
        document.body.classList.add('specific-page'); // adiciona a classe 'specific-page' ao body

        return () => {
            document.body.classList.remove('specific-page'); // remove a classe 'specific-page' quando o componente for desmontado
        };
    }, []);






    return (
        <div className="usuarioContainer">

            <h1>Cadastre-se</h1>


            <form className="formUsuario" onSubmit={handleSubmit(cadastrarUsuario)}>

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

                <div className="campoColuna">

                    <div className="campo">
                        <label htmlFor="sexo">Sexo</label>
                        <div className="inputSelect">
                            <input {...register("sexo", { required: "campo obrigatório" })} type="radio" value="Masculino" />
                            <label htmlFor="Masculino">Masc.</label>
                            <input {...register("sexo", { required: "campo obrigatório" })} type="radio" value="Feminino" />
                            <label htmlFor="Feminino">Fem.</label>
                            <input {...register("sexo", { required: "campo obrigatório" })} type="radio" value=" Não binário" />
                            <label htmlFor="NaoBinario">Não binário</label>
                        </div>
                            {errors?.sexo && <p>{errors.sexo?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="nascimento">Data de nascimento</label>
                        <input type="date"
                            {...register("nascimento", {
                                required: "campo obrigatório"
                            })}
                        />
                        {errors?.nascimento && <p>{errors.nascimento?.message}</p>}
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
                            },
                            validate: (fieldValue) => {
                                console.log(usuarios)
                                return (
                                    !usuarios.some(user => {
                                        console.log(fieldValue, user.cpf)
                                        return fieldValue == user.cpf
                                    }) || "CPF já cadastrado"
                                )

                            }
                        })}
                    />
                    {errors?.cpf && <p>{errors.cpf?.message}</p>}
                </div>

                <div className="campoColuna">
                    <div className="campo">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="digite seu email"
                            {...register("email", {
                                required: "campo obrigatório",
                                maxLength: { value: 50, message: "Máximo de 50 caracteres permitidos" }
                            })}
                        />
                        {errors?.email && <p>{errors.email?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" placeholder="crie uma senha com 6 dígitos "
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
                </div>


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
                        onBlur={(e) => consultaCEP(e.target.value)}
                    />
                    {errors?.cep && <p>{errors.cep?.message}</p>}
                </div>

                <div className="endereço">
                    <div className="campo">
                        <label htmlFor="rua">Rua</label>
                        <input type="text" placeholder="digite o nome da rua"
                            {...register("rua", {
                                required: "campo obrigatório",
                                maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                            })}
                        />
                        {errors?.rua && <p>{errors.rua.message}</p>}
                    </div>


                    <div className="campo">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" placeholder="digite o nome da cidade"
                            {...register("cidade", {
                                required: "campo obrigatório",
                                maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                            })}
                        />
                        {errors?.cidade && <p>{errors.cidade.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="estado">Estado</label>
                        <input type="text" placeholder="digite a sigla do estado"
                            {...register("estado", {
                                required: "campo obrigatório",
                                maxLength: { value: 2, message: "Máximo de 2 caracteres permitidos" }
                            })}
                        />
                        {errors?.estado && <p>{errors.estado.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" placeholder="digite o nome do bairro"
                            {...register("bairro", {
                                required: "campo obrigatório",
                                maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                            })}
                        />
                        {errors?.bairro && <p>{errors.bairro.message}</p>}
                    </div>


                </div>



                <div className="campoColuna">

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
                </div>






                <div className="formAcoes">
                <Cbutton type='submit' estilo="Contained"> Cadastrar</Cbutton>
                <Cbutton type='button' estilo="Outlined" onClick={() => window.location.href = "/login"}>Voltar</Cbutton>
                </div>

                
            </form>


        </div>
    )
}

export default PaginaCadastroUsuario