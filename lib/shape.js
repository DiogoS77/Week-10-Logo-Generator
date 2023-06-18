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
  
  module.exports = { Circle, Triangle, Square };
  