class Shape {
  render() {
    return `<svg version="1.1" width="300" height="200">${this.shape + this.text}</svg>`;
  }
}

class Circle extends Shape {
  constructor({ text, textColor, bgColor }) {
    super();
    this.shape = `<circle cx="150" cy="100" r="100" fill="${bgColor}" />`;
    this.text = `<text x="150" y="125" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
}

class Triangle extends Shape {
  constructor({ text, textColor, bgColor }) {
    super();
    this.shape = `<polygon points="50,200 250,200 150,0" fill="${bgColor}" />`;
    this.text = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
}

class Square extends Shape {
  constructor({ text, textColor, bgColor }) {
    super();
    this.shape = `<rect x="50" y="0" width="200" height="200" fill="${bgColor}" />`;
    this.text = `<text x="150" y="125" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
}

module.exports = { Circle, Triangle, Square };
