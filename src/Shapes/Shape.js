export default class Shape {

    positionX;
    positionY;
    color;
  
    constructor(positionX, positionY) {
      this.positionX = positionX;
      this.positionY = positionY;
      this.color = 'red';
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