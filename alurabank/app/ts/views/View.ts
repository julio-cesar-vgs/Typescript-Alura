class View<T> {
    protected _elemento: Element;
    // aonde vamos passar por parametro os itens para carregar o seletor.
    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: T): string {
        throw new Error("Voce deve implementar o metodo template");
    }
}