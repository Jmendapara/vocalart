export default class Shape {

    positionX;
    positionY;
  
    constructor(positionX, positionY) {
      this.positionX = positionX;
      this.positionY = positionY;
    }
  
    moveUp(distance){
      this.positionY = this.positionY + distance;
    }
  
  
    moveDown(distance){
      this.positionY = this.positionY - distance;
    }
  
  
    moveLeft(distance) {
      this.positionX = this.positionX - distance;
     }
  
    moveRight(distance ) {
       this.positionX = this.positionX + distance;
     }
  
  }
  
  
  /*CIRCLE CLASS*/
  
  class Circling extends Shape{
  
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
  
  
   /*SQUARE CLASS*/
  
   class Square extends Shape{
  
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
   
  
   /*ELLIPSE CLASS*/
    
   class Ellipse extends Shape{
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
  
  
   /*RECTANGLE CLASS*/
  
   class Rectangle extends Shape{
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
  