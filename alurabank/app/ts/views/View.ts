namespace Views{

   export abstract class View<T> {

        protected _elemento: JQuery;
        // aonde vamos passar por parametro os itens para carregar o seletor.
        constructor(seletor: string) {
            this._elemento = $(seletor);
        }

        update(model: T): void {
            this._elemento.html(this.template(model));
        }

        abstract template(model: T): string;
    }
}
