import "./cardEditarLocais.css"
import { useContext } from "react";
import {ExercicioContext} from "../../../context/ExercicioContext"



function CardEditarLocais({ locais }) {

    const {deletarExercicio}= useContext(ExercicioContext)

    return (
        <div className="card-Conteudo">
            <div className="CardArea">
                <span className="titulo">{locais.nome} - {locais.cidade} / {locais.estado}</span>
                <div className="divider"></div>
                <span className="tipoAtividade">Tipo de atividade: {locais.tipo}</span>                
            </div>
            <div className="cardAcoesEditar">
                <button> Editar </button>
                <button onClick={()=>deletarExercicio(locais.id)}> Apagar </button>
            </div>
        </div>
    )

}
export default CardEditarLocais