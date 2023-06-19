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