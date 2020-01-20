import Shape from './Shape.js';

export default class Circle extends Shape{
      
    radius;
    shapeType;
    
    constructor(positionX, positionY, radius) {

      super();
      this.positionX = positionX;
      this.positionY = positionY;
      this.shapeType = "circle";
      this.radius = radius;

    }
  
   }
  