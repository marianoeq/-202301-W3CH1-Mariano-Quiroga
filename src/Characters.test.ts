import { Characters } from './Characters';

describe('Given a Character constructor class', () => {
  describe('When instanciate an object', () => {
    test('then the instance should have the corresponding properties', () => {
      const character = new Characters('pepe', 'pepin', 28);
      expect(character).toHaveProperty('name');
      expect(character).toHaveProperty('family');
      expect(character).toHaveProperty('age');
    });
    test('if the state of the character change', () => {
      const characterTwo = new Characters('Legolas', 'pichin', 38);
      characterTwo.died();
      expect(characterTwo.isLive).toBe(false);
    });
  });
});
