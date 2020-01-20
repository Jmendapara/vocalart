import Shape from './Shape.js';

export default class Square extends Shape{
  
    shapeType;
    sideSize;
  
    constructor(positionX, positionY, sideSize) {
  
      super();
      this.positionX = positionX;
      this.positionY = positionY;
      this.shapeType = "square";
      this.sideSize = sideSize;
  
    }
  
   }