import { Personagem } from './Personagem'

public atacar(oponente: Personagem): void {
  console.log(`${this._nome} atacou ${oponente.nome}`);

}
