import { Pessoa } from './pessoa'

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    idade: number,
    cpf: string,
    genero: string,
    protected _forca: number,
    protected _cansaco: number,
    protected _peso: number,
    protected _intervalo: number

  ) {
  super(nome, idade, cpf, genero)
  }
}
