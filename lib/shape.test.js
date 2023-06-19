const { Square, Triangle, Circle } = require('./shape');

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  test('should render svg for a green circle element', () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    circle.setColor('green');
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test('should accept a fillColor param', () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    circle.setColor('blue');
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe('Triangle', () => {
    let triangle;
  
    beforeEach(() => {
      triangle = new Triangle();
    });
  
    test('should render svg for an orange polygon element', () => {
      const expectedSvg = '<polygon points="150, 18 244, 182" fill="orange" />';
      triangle.setColor('orange');
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  
    test('should accept a fillColor param', () => {
      const expectedSvg = '<polygon points="150, 18 244, 182" fill="purple" />';
      triangle.setColor('purple');
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
  