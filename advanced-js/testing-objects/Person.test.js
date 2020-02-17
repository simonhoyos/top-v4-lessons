const Person = require('./Person');

describe('Person Function Test', () => {
  const p1 = new Person('Pedro', 72, 1.5)
  const p2 = new Person('Maria', 54, 1.7)

  it('Should expect a Person object => {name: "Pedro", weight: 72, height: 1.5}', () => {
      expect(new Person('Pedro', 72, 1.5)).toMatchObject({ name: 'Pedro', weight: 72, height: 1.5 })
  })
  it('Should expect a Person object => {name: "Maria", weight: 54, height: 1.7}', () => {
      expect(new Person('Maria', 54, 1.7)).toMatchObject({ name: 'Maria', weight: 54, height: 1.7 })
  })
  it('Should expect => Hi Maria muy name is Pedro', () => {
      expect(p1.greet(p2)).toBe('Hi Maria muy name is Pedro')
  });

  it('Should expect => Hi Pedro muy name is Maria', () => {
      expect(p2.greet(p1)).toBe('Hi Pedro muy name is Maria')
  });

  it('Should calculate bmi correctly', () => {
    expect(p1.bmi()).toBe(32);
  })
})
