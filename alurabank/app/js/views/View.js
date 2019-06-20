class View {
    // aonde vamos passar por parametro os itens para carregar o seletor.
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    update(model) {
        this._elemento.html(this.template(model));
    }
}
