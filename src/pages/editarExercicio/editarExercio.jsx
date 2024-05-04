import { useForm } from "react-hook-form"
import useCEP from "../../fetchs/useCEP";
import { useContext } from "react";
import { ExercicioContext } from "../../context/ExercicioContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cbutton from "../../components/atoms/button/Cbutton";



function PaginaEditarExercicio() {

    const { idUser, idSpot } = useParams()
    const navigate = useNavigate();

    const { editarExercicio } = useContext(ExercicioContext)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    async function consultaCEP(cep) {
        try {
            const dados = await useCEP(cep)

            setValue('rua', dados.rua);
            setValue('cidade', dados.cidade);
            setValue('bairro', dados.bairro);
            setValue('estado', dados.estado);
            setValue('idUsuario', idUser) //salva o id do usuario no banco de dados dos locais, relacionando a pessoa com o local
        }
        catch (error) {
            console.error('Erro ao consultar o CEP:', error);
        }
    }


    async function preencherCampos(idSpot) {
        try {
            const response = await fetch(`http://localhost:3000/locais/${idSpot}`);
            const data = await response.json();

            setValue('nome', data.nome);
            setValue('tipo', data.tipo);
            setValue('descricao', data.descricao);
            setValue('cep', data.cep);
            setValue('rua', data.rua);
            setValue('latitude', data.latitude);
            setValue('longitude', data.longitude);
            setValue('estado', data.estado);
            setValue('bairro', data.bairro);
            setValue('cidade', data.cidade);
            setValue('idUsuario', idUser);
        }

        catch (error) {
            console.error('Falha ao ler os locais de exercícios', error)
        }
    }


    useEffect(() => {
        preencherCampos(idSpot)
    }, [])



    //Para adicionar a cor verde só ao body dessa página
    useEffect(() => {
        document.body.classList.add('specific-page-header'); // adiciona a classe 'specific-page' ao body

        return () => {
            document.body.classList.remove('specific-page-header'); // remove a classe 'specific-page' quando o componente for desmontado
        };
    }, []); 





    return (
        <div className="cadastroExercicioContainer">


            <div className="usuarioContainer">
                <h1>Editar local </h1>

                <form className="formUsuario" onSubmit={handleSubmit((dados)=>editarExercicio(dados,idSpot))}>

                    <div className="campo">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" placeholder="digite o nome do local"
                            {...register("nome", {
                                required: "campo obrigatório",
                                maxLength: { value: 60, message: "Máximo de 30 caracteres permitidos" }
                            })}
                        />
                        {errors?.nome && <p>{errors.nome?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="tipo">Tipo de prática esportiva</label>
                        <input type="text" placeholder="qual a principal prática esportiva do local"
                            {...register("tipo", {
                                required: "campo obrigatório",
                                maxLength: { value: 30, message: "Máximo de 15 caracteres permitidos" }
                            })}
                        />
                        {errors?.tipo && <p>{errors.tipo?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" placeholder="dê uma breve descrição sobre o local"
                            {...register("descricao", {
                                maxLength: { value: 200, message: "Máximo de 200 caracteres permitidos" }
                            })}
                        />
                        {errors?.descricao && <p>{errors.descricao?.message}</p>}
                    </div>



                    <div className="campo">
                        <label htmlFor="cep">CEP</label>
                        <input type="text" placeholder="digite o CEP do local"
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

                        <div className="campoColuna">

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
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" placeholder="digite o nome do bairro"
                                    {...register("bairro", {
                                        required: "campo obrigatório",
                                        maxLength: { value: 40, message: "Máximo de 40 caracteres permitidos" }
                                    })}
                                />
                                {errors?.bairro && <p>{errors.bairro.message}</p>}
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

                        </div>

                    </div>




                    <div className="campoColuna">

                        <div className="campo">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" placeholder="informe a latitude do local"
                                {...register("latitude", {
                                    required: "campo obrigatório",
                                    maxLength: { value: 10, message: "Máximo de 10 caracteres permitidos" }
                                })}
                            />
                            {errors?.latitude && <p>{errors.latitude.message}</p>}
                        </div>



                        <div className="campo">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" placeholder="informe a longitude do local"
                                {...register("longitude", {
                                    required: "campo obrigatório",
                                    maxLength: { value: 10, message: "Máximo de 10 caracteres permitidos" }
                                })}
                            />
                            {errors?.longitude && <p>{errors.longitude.message}</p>}
                        </div>

                    </div>




                    <div className="formAcoes">
                        <Cbutton type='submit' estilo="Contained"> Editar </Cbutton>
                        <Cbutton type='button' estilo="Outlined" onClick={() => navigate(-1)}>Voltar</Cbutton>
                    </div>



                </form>
            </div>
        </div>
    )
}

export default PaginaEditarExercicio