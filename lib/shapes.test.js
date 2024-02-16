const { Triangle, Circle, Square } = require('./shapes');

// A testing suite for shapes is created.
describe('Triangles', () => {
  describe('check ', () => {
    it('should check if the object triangle was created', () => {
      const shape = new Triangle();
      expect(shape).toEqual(new Triangle());
    });
  });

  describe('check ', () => {
    it('should check if the object triangle was set to the color blue', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.color).toEqual('blue');
    });
  });

  describe('check ', () => {
    it('should check if the object triangle was created with the correct polygon points and shape color', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
});

describe('Circles', () => {
    describe('check ', () => {
      it('should check if the object circle was created', () => {
        const shape = new Circle();
        expect(shape).toEqual(new Circle());
      });
    });
  
    describe('check ', () => {
      it('should check if the object circle was set to the color blue', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.color).toEqual('blue');
      });
    });
  
    describe('check ', () => {
      it('should check if the object circle was created with the correct hieght, width, and shape color', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="100" cy="100" r="80" fill="blue" />');
      });
    });
  });

describe('Squares', () => {
    describe('check ', () => {
      it('should check if the object square was created', () => {
        const shape = new Square();
        expect(shape).toEqual(new Square());
      });
    });
  
    describe('check ', () => {
      it('should check if the object square was set to the color blue', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.color).toEqual('blue');
      });
    });
  
    describe('check ', () => {
      it('should check if the object square was created with the correct hieght, width, and shape color', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="blue" />');
      });
    });
  });