import {Pessoa} from './pessoa'

export class Aluno extends Pessoa {
  protected _turma!: String;
}

falar(): string {
  return 'Cheguei'
}
