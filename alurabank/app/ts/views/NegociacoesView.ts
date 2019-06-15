class NegociacoesView {

    private _elemento: Element;
    // aonde vamos passar por parametro os itens para carregar o seletor.
    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: Negociacoes): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
            ${model.paraArray().map(negociacao => {
            return `
                    <tr>
                    <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                `
        }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `;
    }
}