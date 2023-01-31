/* eslint-disable no-unused-vars */
interface Got {
  name: string;
  family: string;
  age: number;
}

export class Characters implements Got {
  isLive: boolean;
  private serie: string;
  constructor(public name: string, public family: string, public age: number) {
    this.isLive = true;
    this.serie = 'Game of thrones';
  }

  greeting(msg: string): string {
    return msg;
  }

  died(): void {
    this.isLive = false;
  }
}
