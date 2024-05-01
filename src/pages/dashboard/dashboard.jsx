import CardListaLocais from "../../components/molecules/cardListaLocais/cardListaLocais";
import CardAtivos from "../../components/molecules/cardAtivos/cardAtivos";
import { useContext } from "react";
import { ExercicioContext } from "../../context/ExercicioContext"
import { AtivosContext } from "../../context/AtivosContext";



function PaginaDashboard() {

    const { Exercicios } = useContext(ExercicioContext)
    const { usuariosAtivos } = useContext(AtivosContext)

    return (
        <>
            <h1>PaginaDashboard</h1>

            {Array.isArray(Exercicios) ? (
                Exercicios.map((Exercicios, index) => (
                    <CardListaLocais locais={Exercicios} key={index} />))
            ) : (<span> Não há dados disponíveis</span>)
            }



            <h1>Usuários ativos: { usuariosAtivos.length}</h1>

            {Array.isArray( usuariosAtivos) ? (
                 usuariosAtivos.map(( usuariosAtivos, index) => (
                    <CardAtivos usuarios={ usuariosAtivos} key={index} />))
            ) : (<span> Não há dados disponíveis</span>)
            }


        </>
    )
}

export default PaginaDashboard


