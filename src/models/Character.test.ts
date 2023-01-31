import { Character } from './Character';

describe('Given a Character constructor class', () => {
  describe('When instanciate an object', () => {
    test('then the instance should have the corresponding properties', () => {
      const character = new Character('pepe', 'pepin', 28);
      expect(character).toHaveProperty('name');
      expect(character).toHaveProperty('family');
      expect(character).toHaveProperty('age');
    });
    test('if the state of the character change', () => {
      const characterTwo = new Character('Legolas', 'pichin', 38);
      characterTwo.died();
      expect(characterTwo.isLive).toBe(false);
    });
  });
});
