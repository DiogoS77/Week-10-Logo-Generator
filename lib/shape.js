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
  