//declaracao de classe
class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  /**
   * <HTMLInputElement> faz um casting de variavel nos itens. 
   */
  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector('#data');
    this._inputQuantidade = <HTMLInputElement>(
      document.querySelector('#quantidade')
    );
    this._inputValor = <HTMLInputElement>document.querySelector('#valor');
  }

  /* metodo que adicioa um item
  * abaixo é colocado os tipos de cada item do typescript, facilitando o uso dos itens.
  */
  adiciona(event: Event) {
    event.preventDefault();
    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, ',')),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    console.log(negociacao.quantidade + 20);
    console.log(negociacao);
  }
}
