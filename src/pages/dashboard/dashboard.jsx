import CardListaLocais from "../../components/molecules/cardListaLocais/cardListaLocais";
import CardAtivos from "../../components/molecules/cardAtivos/cardAtivos";
import { useContext } from "react";
import { ExercicioContext } from "../../context/ExercicioContext"
import { AtivosContext } from "../../context/AtivosContext";
import "./dashboard.css"



function PaginaDashboard() {

    const { Exercicios } = useContext(ExercicioContext)
    const { usuariosAtivos } = useContext(AtivosContext)

    return (
        <>

            <h1 className="titutoDashboard">Locais de atividades físicas</h1>
            <p className="subtituloDashboard">Descubra os melhores locais para se exercitar em sua região! Cadastre e encontre facilmente academias, parques, pistas de corrida e muito mais. Transforme sua rotina de atividades físicas com apenas alguns cliques.</p>

            <div className="cardDashboardContainer">
                {Array.isArray(Exercicios) ? (
                    Exercicios.map((Exercicios, index) => (
                        <CardListaLocais locais={Exercicios} key={index} />))
                ) : (<span> Não há dados disponíveis</span>)
                }
            </div>



            <h1 className="tituloAtivos">Usuários ativos: {usuariosAtivos.length}</h1>

            <div className="cardDashboardUsuariosAtivos">
                {Array.isArray(usuariosAtivos) ? (
                    usuariosAtivos.map((usuariosAtivos, index) => (
                        <CardAtivos usuarios={usuariosAtivos} key={index} />))
                ) : (<span> Não há dados disponíveis</span>)
                }
            </div>



        </>
    )
}

export default PaginaDashboard


