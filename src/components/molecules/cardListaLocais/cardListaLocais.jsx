import "./cardListaLocais.css"


function CardListaLocais({ locais }) {


    return (
        <div className="card-Conteudo">

            <div className="CardArea">
                <span className="titulo">{locais.nome} - {locais.cidade} / {locais.estado}</span>
                <span className="tipo">{locais.tipo}</span>

                <span className="descricao">{locais.descricao}</span>

                <div className="divider">
                    <hr className="hr-left-card" />
                    <span className="hr-text-card">
                        <span className="LogoCard">ou</span>
                    </span>
                    <hr className="hr-right-card" />
                </div>


                <div className="features">
                    <span><b>Rua:</b> {locais.rua}</span>
                    <span><b>Bairro:</b>  {locais.bairro}</span>
                    <span><b>Coordenadas:</b>  {locais.latitude}&nbsp;&nbsp;|&nbsp;&nbsp;{locais.longitude}</span>
                </div>


            </div>
        </div>
    )

}
export default CardListaLocais