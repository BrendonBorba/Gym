export class Pessoa {
  protected _nome: string = "";
  protected _cpf: string = "";
  protected _endereco: string = "";
  protected _estadoCivil = "";

  constructor(nome: string, cpf: string) {
    this.nome = nome
    this.cpf = cpf
}
