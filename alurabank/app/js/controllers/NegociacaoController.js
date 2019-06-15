//declaracao de classe
class NegociacaoController {
    /**
     * <HTMLInputElement> faz um casting de variavel nos itens.
     */
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = (document.querySelector('#quantidade'));
        this._inputValor = document.querySelector('#valor');
    }
    /* metodo que adicioa um item
    * abaixo é colocado os tipos de cada item do typescript, facilitando o uso dos itens.
    */
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
        });
    }
}
