import { Negociacoes } from "../models/Negociacoes";
import { NegociacoesView } from "../views/NegociacoesView";
import { MensagemView } from "../views/MensagemView";
import { Negociacao } from "../models/Negociacao";

//declaracao de classe
export class NegociacaoController {
  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  /**
   * <HTMLInputElement> faz um casting de variavel nos itens. 
   */
  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  /* metodo que adicioa um item
  * abaixo é colocado os tipos de cada item do typescript, facilitando o uso dos itens.
  */
  adiciona(event: Event): void {
    event.preventDefault();
    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso');
  }
}
