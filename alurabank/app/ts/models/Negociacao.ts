export class Negociacao {
  //atributos direto no constuctor, nao ha atributos devido a tipagem do typescritp
  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {}

  get volume() {
    return this.quantidade * this.valor;
  }
}
