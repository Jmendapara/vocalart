import Shape from './Shape.js';

export default class Ellipse extends Shape{
    
    shapeType;
    width;
    height;
    
    constructor(positionX, positionY, width, height) {
  
        super();
        this.positionX = positionX;
        this.positionY = positionY;
        this.shapeType = "ellipse";
        this.width = width;
        this.height = height;
  
    }
  
  
   }
  