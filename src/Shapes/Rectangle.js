import Shape from './Shape.js';

export default class Rectangle extends Shape{

    shapeType;
    width;
    height;
  
    constructor(positionX, positionY, width, height) {
        super();
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
    }
  
  }