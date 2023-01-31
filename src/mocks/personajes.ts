/* eslint-disable no-unused-vars */
import { Character } from '../models/Character';
import { King } from '../models/KingCharacter';
import { Fighter } from '../models/FighterCharacter';
import { Adviser } from '../models/Adviser';
import { Squire } from '../models/SquireCharacter';

const king = new King('Joffrey', 'Baratheon', 60, 40);
const fighterMan = new Fighter('Jaime', 'Lannister', 32, 'sward', 8);
const fighterWoman = new Fighter('Daenerys', 'Targaryen', 28, 'ax', 9);
const adviser = new Adviser('Tyrion', 'Lannister', 45, fighterWoman);
const squire = new Squire('Bronn', 'pepe', 23, fighterMan, 7);

export const charactersData: Character[] = [
  king,
  fighterMan,
  fighterWoman,
  adviser,
  squire,
];

//   (asesor de Daenerys) y
// Bronn (escudero de Jaime)
