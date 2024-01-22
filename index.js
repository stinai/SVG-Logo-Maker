const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

function createSVG(data) {
    const text = data.text;
    const textColour = data.textColour;
    const shapeColour = data.shapeColour;
    let shape;

    switch (data.shapeType.toLowerCase()) {
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        default:
            console.log('Invalid shape, please choose between circle, square, or triangle');
            process.exit(1);
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()} fill="${shapeColour}"/>
        <text x="150" y="110" text-anchor="middle" fill="${textColour}" font-size="35">${text}</text>
    </svg>`;
}

function generateLogo() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to 3 characters',
            },
            {
                type: 'input',
                name: 'textColour',
                message: "Enter a colour for the text (keyword or hexadecimal value)",
            },
            {
                type: 'input',
                name: 'shapeType',
                message: "Enter your shape type (circle, square, or triangle)",
            },
            {
                type: 'input',
                name: 'shapeColour',
                message: "Enter a colour for the shape (keyword or hexadecimal value)",
            }
        ])
        .then((data) => {
            fs.writeFile(`logo.svg`, createSVG(data), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Generated logo.svg');
                }
            });
        });
}

generateLogo();