import { King } from './KingCharacter';

describe('Given a constructor class', () => {
  describe('When a king character is created', () => {
    test('Then it should have 4 properties', () => {
      const newKing = new King('julio', 'cesar', 62, 35);
      expect(newKing).toHaveProperty('name');
      expect(newKing).toHaveProperty('family');
      expect(newKing).toHaveProperty('age');
      expect(newKing).toHaveProperty('yearsActive');
      expect(newKing).toBeInstanceOf(King);
    });
  });
});
