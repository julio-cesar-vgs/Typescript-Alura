class View {
    // aonde vamos passar por parametro os itens para carregar o seletor.
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
