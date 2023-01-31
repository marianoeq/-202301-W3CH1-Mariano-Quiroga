/* eslint-disable max-params */
/* eslint-disable no-unused-vars */
import { Characters } from './characters';

export class Fighter extends Characters {
  isLive: boolean;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public weapon: string,
    public skill: 0 | 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10
  ) {
    super(name, family, age);
    this.isLive = true;
  }

  greeting() {
    return super.greeting('Primero pego y luego pregunto');
  }

  died(): void {
    super.died();
  }
}
