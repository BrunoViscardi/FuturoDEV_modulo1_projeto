import "./cardAtivos.css"


function CardAtivos({ usuarios }) {


    return (
        <div className="card-Conteudo">

            <div>
                0
            </div>

            <span>{usuarios.nome}</span>

        </div>
    )

}
export default CardAtivos