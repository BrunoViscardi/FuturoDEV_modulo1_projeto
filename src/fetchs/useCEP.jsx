

async function useCEP(cep) {
    try {
        const response = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
        const data = await response.json();
        const dados = await {
            rua: data.logradouro,
            cidade: data.localidade,
            bairro: data.bairro,
            estado: data.uf
        }
        return dados
    }
    catch (error) {
        console.error('Erro ao consultar o CEP:', error);
    }
    

}
export default useCEP;