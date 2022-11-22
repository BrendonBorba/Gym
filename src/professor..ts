import { Pessoa } from './pessoa'
export class Professor extends Pessoa {
  constructor(
    nome: string,
    idade: number,
    cpf: string,
    genero: string
  ) {
  super(nome, idade, cpf, genero)
  }
}
