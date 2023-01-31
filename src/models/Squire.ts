/* eslint-disable max-params */
/* eslint-disable no-unused-vars */
import { Characters } from './characters';
import { Fighter } from './FighterCharacter';

export class Squire extends Characters {
  isLive: boolean = true;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public boss: Fighter,
    public servility: 0 | 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10
  ) {
    super(name, family, age);
  }

  greeting() {
    return super.greeting('Soy un loser');
  }

  died() {
    super.died();
  }
}

const pepe = new Squire(
  'pepe',
  'pepe3',
  45,
  new Fighter('jksjdj', 'jsj', 478, 'ahcha', 5),
  9
);
console.log(pepe);
