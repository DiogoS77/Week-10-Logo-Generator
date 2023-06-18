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
  