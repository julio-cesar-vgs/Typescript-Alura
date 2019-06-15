class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    // adiciona um item ao array negociacoes. 
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    // pega os dados do array
    paraArray() {
        return this._negociacoes;
    }
}
