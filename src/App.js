import React, { Component } from 'react';
import { render } from "react-dom";
import P5Wrapper from "react-p5-wrapper";
import p5 from "p5";
import logo from './logo.svg';
import './App.css';
import Sketch from 'react-p5';

class App extends Component {

  /*Trying to learn github
  
  V3

  JAY TESTING*/

  


  constructor(){

    super();

    this.state = {

      allShapes:[],
      selectedShape: '',

    }

    this.handleRecord = this.handleRecord.bind(this);
    this.handleSpeechInput = this.handleSpeechInput.bind(this);



  }

  //Takes in the text what user and calls Microsoft LUIS API, which returns a JSON object of key information
  handleSpeechInput(params){

    let subKey = "82d9d64b219540839143e6a0c7937a76&q";
    let base = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/9ab3d56e-3f82-4da4-8ab0-c25deeabcf29?";
    let token  = "verbose=true&timezoneOffset=0&subscription-key="+subKey+"=";

    let url = base + token + params;

    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
      console.log(result);
      }
    );

  }


  //Takes in the user input and passes the text to the handleSpeechInput function
  handleRecord(){

    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    window.SpeechGrammarList = window.webkitSpeechGrammarList || window.SpeechGrammarList;

    var handleSpeechInput = this.handleSpeechInput;
    const recognition = new window.SpeechRecognition();

    recognition.continuous = true;

    recognition.onresult = function(event){

      var newText = event.results[(event.results.length-1)][0].transcript;
      handleSpeechInput(newText);

    }

    recognition.start();

  }



  handleRequest(request) {


  class Shape {

    positionX;
    positionY;

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

    drawShape(){
      p.circle(this.positionX,this.positionY,this.radius);
    }


   }


   /*SQUARE CLASS*/

   class Square extends Shape{

    sideSize;

    drawShape(){
      p.square(this.positionX,this.positionY,this.sideSize);
    }


   }
   

   /*ELLIPSE CLASS*/
    
   class Ellipse extends Shape{

    width;
    height;

    drawShape(){
      p.ellipse(this.positionX,this.positionY,this.width, this.height);
    }


   }


   /*RECTANGLE CLASS*/

   class Rectangle extends Shape{

    width;
    height;

    drawShape(){
      p.rect(this.positionX,this.positionY,this.width, this.height);
    }
  }



  }

 
  sketch(p) {

    /*class Rectangle {

      drawShape(){
        p.square(200,200,20);
      }
    }

    let square = new Rectangle(); // creating new instance of Polygon Class.

   this.state.allShapes.push(square);
   
   -OBJECT FOR EACH SHAPE
      -EACH SHAPE HAS GLOBAL VARIABLES THAT CONTANT THE PARAMENTER OF THE FUNCTION TO DRAW THAT SHAPE
   
*/

    
    p.setup = () => {
      
      p.createCanvas(window.innerWidth - 100, window.innerHeight - 100);

      let circle1 = new Circling();
      circle1.positionX=100;
      circle1.positionY=100;
      circle1.radius=100;
   
      let circle2 = new Circling();
      circle2.positionX=200;
      circle2.positionY=200;
      circle2.radius=100;
   
   
      this.state.allShapes.push(circle1);
      this.state.allShapes.push(circle2);
    
    };

    p.draw = () => {

      p.background(102);

      p.stroke(255);
      p.fill(255);
      

      for(var i = 0; i < this.state.allShapes.length; i++){

        this.state.allShapes[i].drawShape();
        this.state.allShapes[i].moveRight(10);

      }

    }

  }


  render() {
    return (
      <div className="App">
        <div className = "Canvas">
          <P5Wrapper sketch={this.sketch.bind(this)} />
        </div>
        <div className = "Controls">
          <button onClick={() => this.handleRecord()}>RECORD</button>
        </div>
      </div>
    );
  }
}

export default App;
