import "./cardAtivos.css"


function CardAtivos({ usuarios }) {


    return (
        <div className="cardAtivos">

            <span className="profile">ou</span>             
            <span className="profileNome">{usuarios.nome}</span>

        </div>
    )

}
export default CardAtivos