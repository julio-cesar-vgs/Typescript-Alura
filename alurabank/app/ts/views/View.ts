import {logarTempoExecucao} from '../helpers/decorators/logarTempoExecucao'

export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    // aonde vamos passar por parametro os itens para carregar o seletor.
    constructor(seletor: string, escapar: boolean = false) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoExecucao()
    update(model: T): void {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}