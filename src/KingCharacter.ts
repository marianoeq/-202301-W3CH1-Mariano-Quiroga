import { Characters } from './characters';

export class King extends Characters {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public yearsActive: number
  ) {
    super(name, family, age);
    this.yearsActive = yearsActive;
  }

  greeting() {
    const msg = `<p>Van a morir todos</p>`;
    const div = document.querySelector('#app');
    div!.innerHTML = msg;
  }

  died() {
    super.died();
    this.isLive = false;
  }
}
