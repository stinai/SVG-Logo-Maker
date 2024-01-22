const { Triangle, Circle, Square } = require('./shapes.js');

test('triangle', () => {
const shape = new Triangle();
expect(shape.render()).toEqual('<polygon points="150,10 50,175 250,175"');
});

test('square', () => {
    const shape = new Square();
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120"');
    }
);

test('circle', () => {
    const shape = new Circle();
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80"');
    }
)