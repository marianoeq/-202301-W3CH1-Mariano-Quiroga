/* eslint-disable no-unused-vars */
import { Characters } from './characters';

export class Adviser extends Characters {
  isLive: boolean;

  constructor(
    public name: string,
    public family: string,
    public age: number,
    public personAdvises: string[]
  ) {
    super(name, family, age);
    this.isLive = true;
    this.personAdvises = ['King', 'fighter', 'Adviser', 'squire'];
  }

  greeting() {
    return super.greeting('No sé por qué, pero creo que voy a morir pronto');
  }

  died() {
    super.died();
  }
}
