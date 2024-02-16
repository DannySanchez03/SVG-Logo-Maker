const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'letters',
        message: 'Enter up to 3 characters for the logo:',
        validate: function (input) {
            const trimmedInput = input.trim();
            return trimmedInput.length <= 3;
        },
    },
    {
        type: 'input',
        name: 'char_color',
        message: 'Enter a color (keyword or hex) for the letters:',
        validate: function (input) {
            if (/^#[0-9A-F]{6}$/i.test(input)) {
                return true;
            } else if (['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'white', 'black'].includes(input.toLowerCase())) {
                return true;
            } else {
                return 'Please enter a valid color (keyword or hex).';
            }
        },
    },
    {
        type: 'list',
        message: 'Choose the shape for the logos background',
        name: 'shape',
        choices: ['Triangle','Circle','Square'],
        validate: function (input) {
            return input && input.length > 0 ? true : 'Please select a shape.';
        },
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Enter a color (keyword or hex) for the shape:',
        validate: function (input) {
            if (/^#[0-9A-F]{6}$/i.test(input)) {
                return true;
            } else if (['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'white', 'black'].includes(input.toLowerCase())) {
                return true;
            } else {
                return 'Please enter a valid color (keyword or hex).';
            }
        },
    },
    ])
    .then((response) =>{
        let shape;
        switch(response.shape){
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Circle':
                shape = new Circle();
                break;
            case 'Square':
                shape = new Square();
                break;
        }
        shape.setColor(response.shape_color);
        shape.setCharacters(response.letters, response.char_color);
        const logo = shape.renderLogo();
        const filename = './examples/logo.svg';
        fs.writeFileSync(filename, logo);
        console.log(`SVG file "${filename}" created successfully!`);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });