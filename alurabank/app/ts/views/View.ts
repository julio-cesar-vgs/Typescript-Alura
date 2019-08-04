export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    // aonde vamos passar por parametro os itens para carregar o seletor.
    constructor(seletor: string, escapar: boolean = false) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T): void {

        const t1 = performance.now();

        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(this.template(model));
        const t2 = performance.now();
        console.log(`Tempo de execução do método update(): ${(t2 - t1) / 1000} segundos`);
    }

    abstract template(model: T): string;
}