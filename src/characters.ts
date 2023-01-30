interface Got {
  name: string;
  family: string;
  age: number;
  isLive: boolean;
  serie: string;
}

export class Characters implements Got {
  isLive;
  serie;
  constructor(public name: string, public family: string, public age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isLive = true;
    this.serie = 'Game of thrones';
  }

  died() {
    this.isLive = false;
  }
}
