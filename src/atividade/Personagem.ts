export class Personagem {
  constructor(
    protected _nome: string,
    protected _forca: number,
    protected _habilidadeMental: number,
    protected _poderDeAtaque: number,
    protected _esquiva: number,
    protected _resistencia: number,
    protected _vidaAtual: number,
    protected _vidaMaxima: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log("Um comportamento desconhecido");
  }

  contraAtacar(personagem: Personagem): void {
    console.log("COmportamento desconhedido");
  }

  aprimorarHabilidadePrincipal(): void {
    console.log("Comportamento desconhecido");
  }

  regenerarVida(): void {
    console.log("Comportamento desconhecido");
  }
}
