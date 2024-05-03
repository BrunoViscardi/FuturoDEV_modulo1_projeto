import CardEditarLocais from "../../components/molecules/cardEditarLocais/cardEditarLocais"
import { useContext } from "react";
import { ExercicioContext } from "../../context/ExercicioContext"
import "./listagemExercicio.css"




function PaginaListagemExercicio() {

    const { Exercicios } = useContext(ExercicioContext)

    return (
        <>

            <div className="EditarLocaisContainer">
            <h1 className="tituloEditarLocais">Locais cadastrados</h1>
            {Array.isArray(Exercicios) ? (
                Exercicios.map((Exercicios, index) => (
                    <CardEditarLocais locais={Exercicios} key={index} />))
            ) : (<span> Não há dados disponíveis</span>)
            }
            </div>
            
        </>
    )
}

export default PaginaListagemExercicio