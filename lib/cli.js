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

//The code defines a CLI class that generates an SVG logo based on user input.
//The run method executes the logo generation process.
//It prompts the user with a set of questions and stores their responses.
//The generateSVG method creates the SVG logo based on the user's input.
//It creates instances of LogoText and shape objects (Circle, Square, or Triangle) based on the selected shape.
//The generateSVG method returns the combined SVG object.
//The run method calls render on the SVG object to get the SVG markup.
//The SVG markup is written to a file named 'logo.svg'.
//Success or error messages are displayed accordingly.
//Overall, this code uses inquirer to get user input, generates an SVG logo, and saves it to a file.