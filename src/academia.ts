import { Professor } from "./professor.";
import { Aluno } from "./aluno";

export class Academia {
  private static academia: Academia;
  private readonly professores: Professor[] = []
  private readonly alunos: Aluno[] = []

  private constructor(
    private _nome: string,
    private _cnpj: string
  ) {}

  static getAcademia(nome: string, cnpj: string) {
    if (Academia.academia) return Academia.academia
    Academia.academia = new Academia(nome, cnpj)
    return Academia.academia;
  }

  inserirProfessor(...professores: Professor[]): void {
    for (const professor of professores) {
      this.professores.push(professor)
    }
  }

  listarProfessores(): number {
    return this.professores.length
  }

  inserirAluno(...alunos: Aluno[]): void {
    for (const aluno of alunos) {
      this.alunos.push(aluno)
    }
  }

  listarAlunos(): number {
    return this.alunos.length
  }


  // get quantidadeProfessores() {
  //   return this._professores.length
  // }

  // get quantidadeAlunos() {
  //   return  this._alunos.length
  // }

  // get professores() {
  //   return this._professores
  // }

  dadosAcademia() {
    const dados = `Dados da academia:
    nome: ${this._nome};
    número de professores: ${academia.listarProfessores()};
    número de alunos: ${academia.listarAlunos()};
    CNPJ: ${this._cnpj};
    `;
  }
}

const academia = Academia.getAcademia('Gold Gym', '12.123.123/0001-12')
academia.dadosAcademia()
const professor = new Professor('Angelo', 40, '123.123.123-12', 'masculino')

academia.inserirProfessor(professor)

console.log(academia.dadosAcademia());


// export class Aluno {
//   constructor(readonly nome: string, readonly sobrenome: string) {}
// }
// const professor1 = new Professor('Angel', 'Luz', '123.456.789-12', "M")
// const professor2 = new Professor('Dede', 'Fernandes', '423.423.423.42', 'masculino')
// const professor3 = new Professor('reigladi', 'superman', '324.234.234.43', 'masculino')


// academia.adicionaProfessor("angelo")
// academia.adicionaProfessor("dedecio")
// academia.adicionaProfessor("gladi")

//academia.deletarProfessor(professor1)

// console.log(academia);

// get professores(): string[] {
//   return this._professores;
// }

// get alunos(): string[] {
//   return this._alunos;
// }

// adicionaProfessor(professor: string): void {
//   this._professores.push(professor)
// }

// mostrarProfessores(): void {
//   for (const professor of this._professores) {
//     console.log(professor)
//   }
// }

// deletarProfessor(professor: string): void {
//   const index = this._professores.indexOf(professor)
//   this._professores.splice(index, 1)
// }
