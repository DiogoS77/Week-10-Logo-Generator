class LogoText {
    constructor(text, colour) {
      this.colour = colour;
      this.text = text;
    }
    render() {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
    }
  }
  
  class SVG {
    constructor(shape, logoText) {
      this.shape = shape;
      this.logoText = logoText;
    }
    render() {
      const shapeMarkup = this.shape.render();
      const logoTextMarkup = this.logoText.render();
      const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeMarkup}${logoTextMarkup}</svg>`;
      return svg;
    }
  }
  
  module.exports = { LogoText, SVG };
  
//The code defines a LogoText class responsible for rendering the logo text.
//The LogoText class has a constructor that takes the text and color as parameters and sets them as instance properties.
//The render method of the LogoText class generates SVG markup for the logo text with the specified color and text content.
//The code also defines an SVG class responsible for rendering the overall SVG markup for the logo.
//The SVG class has a constructor that takes the shape and logoText instances as parameters and sets them as instance properties.
//The render method of the SVG class generates the SVG markup by invoking the render methods of the shape and logoText instances and combining them with the necessary SVG wrapper elements.
//The SVG class generates an SVG element with a fixed width and height of 300x200 pixels and includes the rendered shape and logo text within it.
//The LogoText and SVG classes are exported as an object from the module.
//In summary, the code defines a LogoText class responsible for rendering the text content of the logo and an SVG class responsible for generating the overall SVG markup. The LogoText class generates SVG markup for the text, while the SVG class combines the rendered shape and text into a complete SVG element.