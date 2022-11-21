export class Pessoa {
  public nome: string;
  private idade: number;
  private cpf: string;
  private genero: string;

  constructor(nome: string, idade: number, cpf: string, genero: string) {
    this.nome = nome
    this.cpf = cpf
    this.genero = genero
    this.idade = idade
  }
}
