function calc(a, b) {
  if (a > b) {
    return a + b;
  } else if (b > a) {
    return b - a;
  } else {
    return a;
  }
}

describe('calc', () => {
  it('should add 2 to 1 correctly', () => {
    expect(calc(2,1)).toBe(3);
  });

  it('should substract 3 from 4 correctly', () => {
    expect(calc(3,4)).toBe(1);
  });

  it('should return the number if both arguments are equal', () => {
    expect(calc(1,1)).toBe(1);
  });
});

describe('something', () => {
  it('should match object', () => {
    expect({}).toMatchObject({});
  });
});

describe('Types', () => {
  it('should return a number', () => {
    expect(typeof(calc(1,2))).toBe('number');
  });
});
