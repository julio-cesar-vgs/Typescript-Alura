class View{
    protected _elemento: Element;
    // aonde vamos passar por parametro os itens para carregar o seletor.
    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

}