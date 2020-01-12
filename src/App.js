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


  }


  handleRecord(){

    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    window.SpeechGrammarList = window.webkitSpeechGrammarList || window.SpeechGrammarList;

    const recognition = new window.SpeechRecognition();

    recognition.continuous = true;

    recognition.onresult = function(event){

    console.log(event);
    //var newText = event.results[(event.results.length-1)].transcript....

    //handleText(newText);...


    //recognition.re
    //recognition.start();

    }

    recognition.start();


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

   class Circling{


    positionX;
    positionY;
    radius;

    moveUp(distance){

      this.positionX = this.positionX + distance;
      this.positionY = this.positionY + distance;

    }

    drawShape(){

      p.circle(this.positionX,this.positionY,this.radius);

    }


   }


   
   
    
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
