class Shape {
    setColour(colour) {
        return this.colour = colour;
     };
};

class Circle extends Shape {
    render() {
    return `<circle cx="150" cy="100" r="80"`;
    };
};

class Square extends Shape {
    render() {
    return `<rect x="90" y="40" width="120" height="120"`;
    };
};

class Triangle extends Shape {
    render() {
    return `<polygon points="150,10 50,175 250,175"`;
    };
};

module.exports = { Triangle, Circle, Square};