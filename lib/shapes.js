class Shape {
    constructor() {
        this.color = '';
        this.characters = '';
        this.charColor = '';
    }

    setColor(color) {
        this.color = color;
    }

    setCharacters(characters, charColor) {
        this.characters = characters;
        this.charColor = charColor;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }

    renderLogo(){
        return `<svg width="300" height="200">
    ${this.render()}
    <text x="156" y="110" font-family="Arial" font-size="90" fill="${this.charColor}" text-anchor="middle" alignment-baseline="central">${this.characters}</text>
</svg>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }

    renderLogo(){
        return `<svg width="200" height="200">
    ${this.render()}
    <text x="100" y="100" font-family="Arial" font-size="70" fill="${this.charColor}" text-anchor="middle" alignment-baseline="central">${this.characters}</text>
</svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }

    renderLogo(){
        return `<svg width="200" height="200">
    ${this.render()}
    <text x="100" y="100" font-family="Arial" font-size="50" fill="${this.charColor}" text-anchor="middle" alignment-baseline="central">${this.characters}</text>
</svg>`;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
};

