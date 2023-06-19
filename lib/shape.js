class Shape {
    constructor(color = '#000000') {
      this.color = color;
    }
    setColor(color) {
      this.color = color;
    }
  }
  
  class Square extends Shape {
    render() {
      const { color } = this;
      return `<rect x="90" y="40" width="120" height="120" fill="${color}" />`;
    }
  }

  class Circle extends Shape {
    render() {
      const { color } = this;
      return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      const { color } = this;
      return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  
//The code defines a Shape class as the base class for different shapes used in the logo.
//The Shape class has a constructor that sets the default color to black (#000000).
//The setColor method allows changing the color of a shape instance.
//The Square class extends the Shape class and overrides the render method.
//The render method of the Square class generates SVG markup for a square shape with the specified color.
//The Circle class extends the Shape class and overrides the render method.
//The render method of the Circle class generates SVG markup for a circle shape with the specified color.
//The Triangle class extends the Shape class and overrides the render method.
//The render method of the Triangle class generates SVG markup for a triangle shape with the specified color.
//The Circle, Triangle, and Square classes are exported as an object from the module.
//In summary, the code defines a base Shape class and three shape classes (Circle, Triangle, and Square) that inherit from the base class. Each shape class has a render method to generate SVG markup specific to that shape.