const inquirer = require('inquirer');
const fs = require('fs').promises;
const questions = require('./questions');
const { LogoText, SVG } = require('./svg');
const { Circle, Triangle, Square } = require('./shape');

class CLI {
  constructor() {}

  async run() {
    try {
      const responses = await inquirer.prompt(questions);
      const svg = this.generateSVG(responses);
      const markup = svg.render();
      await fs.writeFile('logo.svg', markup);
      console.log('Logo successfully generated.');
    } catch (err) {
      console.error(err);
      console.log('Something went wrong.');
    }
  }

  generateSVG(options) {
    const { text, textColour, shape, shapeColour } = options;
    const logoText = new LogoText(text, textColour);

    let shapeObject;

    switch (shape) {
      case 'circle':
        shapeObject = new Circle(shapeColour);
        break;
      case 'square':
        shapeObject = new Square(shapeColour);
        break;
      case 'triangle':
        shapeObject = new Triangle(shapeColour);
        break;
      default:
        throw new Error('Invalid shape specified.');
    }

    return new SVG(shapeObject, logoText);
  }
}

module.exports = CLI;