const Square = require('./index');

describe('Square', () => {
  it('should set attribute side', () => {
    const square = new Square(5);
    expect(square.side).toBe(5);
  });

  it('should calculate square perimeter correctly', () => {
    const square = new Square(4);
    expect(square.perimeter()).toBe(16);
  });

  it('should calculate square area correctly', () => {
    const square = new Square(3);
    expect(square.area()).toBe(9);
  });
});
