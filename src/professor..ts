import { Pessoa } from './pessoa'
import { Academia } from './academia'

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
