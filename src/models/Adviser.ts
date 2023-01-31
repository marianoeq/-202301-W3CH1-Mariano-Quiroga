/* eslint-disable no-unused-vars */
import { Character } from './Character';

export class Adviser extends Character {
  isLive: boolean;

  constructor(
    public name: string,
    public family: string,
    public age: number,
    public personAdvises: Character
  ) {
    super(name, family, age);
    this.isLive = true;
  }

  greeting() {
    return super.greeting('No sé por qué, pero creo que voy a morir pronto');
  }

  died() {
    super.died();
  }
}
