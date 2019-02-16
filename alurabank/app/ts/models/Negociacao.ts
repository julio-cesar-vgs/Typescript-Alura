class Negociacao {


    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    private _data;

    get data() {
        return this._data;
    }

    private _quantidade;

    get quantidade() {
        return this._quantidade;
    }

    private _valor;

    get valor() {
        return this._valor;
    }


    get volume() {
        return this._quantidade * this._valor;
    }
}