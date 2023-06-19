const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'What text do you want to use?',
    },
    {
      type: 'input',
      name: 'textColour',
      message: 'What text colour do you want to use?',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want to use?',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColour',
      message: 'What shape colour do you want to use?',
    },
  ];
  
  module.exports = questions;
  
//The code defines an array of questions that will be asked to the user.
//Each question object specifies the type of input expected (type), the name of the input field (name), and the message to display to the user (message).
//The first question asks for the text to be used in the logo.
//The second question asks for the color of the text.
//The third question asks the user to select a shape from a list of choices (circle, square, or triangle).
//The fourth question asks for the color of the selected shape.
//The questions array is exported to be used in other modules.
//In summary, the code defines a set of questions to gather user input for the text, text color, shape selection, and shape color in order to generate a customized logo.