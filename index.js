const CLI = require('./lib/cli');

const cli = new CLI();
cli.run();

//The code imports the CLI class from the cli module.
//An instance of the CLI class is created and assigned to the variable cli.
//The run method of the cli instance is invoked.
//The CLI class is responsible for running the command-line interface (CLI) for generating a logo.
//When the run method is called, it initiates the CLI process.
//The CLI prompts the user with questions to gather input for generating the logo.
//After receiving the user's responses, the CLI generates the SVG markup for the logo.
//The SVG markup is written to a file named logo.svg using the fs.writeFile method.
//If any errors occur during the process, an error message is displayed.
//If the process completes successfully, a success message is displayed.
//In summary, the code sets up and runs the command-line interface (CLI) for generating a logo. It imports the CLI class, creates an instance of it, and executes the run method, which prompts the user, generates the SVG markup, and writes it to a file.