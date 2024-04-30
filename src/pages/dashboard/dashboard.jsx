import CardListaLocais from "../../components/molecules/cardListaLocais/cardListaLocais";
import { useContext } from "react";
import { ExercicioContext } from "../../context/ExercicioContext"



function PaginaDashboard(){

    const { Exercicios } = useContext(ExercicioContext)

    return(
        <>
        <h1>PaginaDashboard</h1>

        {Array.isArray(Exercicios) ? (
                Exercicios.map((Exercicios, index) => (
                    <CardListaLocais locais={Exercicios} key={index} />))
            ) : (<span> Não há dados disponíveis</span>)
            }

        </>
    )
}

export default PaginaDashboard


