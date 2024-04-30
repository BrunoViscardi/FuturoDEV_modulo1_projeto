import "./cardListaLocais.css"


function CardListaLocais({ locais }) {


    return (
        <div className="card-Conteudo">
            
            <div className="CardArea">
                <span className="titulo">{locais.nome} - {locais.cidade} / {locais.estado}</span>
                <div className="divider"></div>
                <span className="tipo">{locais.tipo}</span>
                <span className="descricao">{locais.descricao}</span>

                <div className="features">
                <span>Rua: {locais.rua}</span>
                <span>Bairro: {locais.bairro}</span>
                <span>Coordernenadas: {locais.latitude}|{locais.longitude}</span>
                </div>
                
                
            </div>
        </div>
    )

}
export default CardListaLocais