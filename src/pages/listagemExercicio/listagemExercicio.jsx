import CardEditarLocais from "../../components/molecules/cardEditarLocais/cardEditarLocais"
import { useContext } from "react";
import {ExercicioContext} from "../../context/ExercicioContext"




function PaginaListagemExercicio(){

    const {Exercicios}= useContext(ExercicioContext)

    return(
        <>
        <h1>PaginaListagemExercicio</h1>


        {Array.isArray(Exercicios) ? (
                    Exercicios.map((Exercicios, index) => (
                        <CardEditarLocais locais={Exercicios} key={index}  />))
                ) : (<span> Não há dados disponíveis</span>)
                }
        </>
    )
}

export default PaginaListagemExercicio