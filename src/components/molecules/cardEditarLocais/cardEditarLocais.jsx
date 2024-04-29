import "./cardEditarLocais.css"

function CardEditarLocais({ locais }) {

    return (
        <div className="card-Conteudo">
            <div className="CardArea">
                <span className="titulo">{locais.nome} - {locais.cidade} / {locais.estado}</span>
                <div className="divider"></div>
                <span className="usuario">Por: {locais.tipo}</span>                
            </div>
            <div className="cardAcoesEditar">
                <button> Editar </button>
                <button> Apagar </button>
            </div>
        </div>
    )

}
export default CardEditarLocais