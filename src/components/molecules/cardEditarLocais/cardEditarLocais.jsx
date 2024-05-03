import "./cardEditarLocais.css"
import { useContext } from "react";
import { ExercicioContext } from "../../../context/ExercicioContext"
import { useParams } from "react-router-dom";
import "./cardEditarLocais.css"
import Cbutton from "../../atoms/button/Cbutton";




function CardEditarLocais({ locais }) {

    const { deletarExercicio } = useContext(ExercicioContext)
    const { idUser } = useParams()


    function EcaminharEditar(idSpot) {
        window.location.href = `/${idUser}/editar-exercicio/${idSpot}`
    }


    return (

        <div className="cardEditarLocais">
            <div className="CardAreaEditar">
                <span className="titulo">{locais.nome} - {locais.cidade} / {locais.estado}</span>
                <span className="tipoEditar">{locais.tipo}</span>
                <span className="coordenadasEditar"><b>Coordenadas:</b>  {locais.latitude}&nbsp;&nbsp;|&nbsp;&nbsp;{locais.longitude}</span>
            </div>


            <div className="cardAcoesEditar">
                <Cbutton type='button' estilo="Contained" onClick={() => EcaminharEditar(locais.id)}>Editar</Cbutton>
                <Cbutton type='button' estilo="Outlined" onClick={() => deletarExercicio(locais.id)}>Apagar</Cbutton>
            </div>
        </div>

    )

}
export default CardEditarLocais