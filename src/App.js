import React, { Component } from 'react';
import { render } from "react-dom";
import P5Wrapper from "react-p5-wrapper";
import p5 from "p5";
import logo from './logo.svg';
import './App.css';
import Sketch from 'react-p5';
const Shapes = require('./Shapes.js') 




class App extends Component {

  /*Trying to learn github
  
  V3

  JAY TESTING*/

  


  constructor(){

    super();

    this.state = {

      allShapes:[],
      selectedShape: '',
      canvasHeight: '',
      canvasWidth: '',

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
      this.handleRequest(result);
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




      let circle1 = new Shapes.Circling(100, 100, 100);
  
   
      let circle2 = new Shapes.Circling(200, 200, 100);
   
      this.state.allShapes.push(circle1);
     // console.log(this.state.allShapes[0]);
      this.state.allShapes.push(circle2);



  //logic for handling the response is...

  //which class we want to create an instance of 

  //push to state.allShapes


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
    
    };

    p.draw = () => {

      p.background(102);

      p.stroke(255);
      p.fill(255);
      
  

      for(var i = 0; i < this.state.allShapes.length; i++){
      
        let tempShape = this.state.allShapes[i];
        console.log(tempShape);
        //console.log("hi");


        switch (tempShape.shapeType) {

          case "circle":
              p.circle(tempShape.positionX,tempShape.positionY,tempShape.radius);
              break;

          case "square":
              p.square(tempShape.positionX,tempShape.positionY,tempShape.sideSize);
              break;

          case "rectangle":
              p.rect(tempShape.positionX,tempShape.positionY,tempShape.width, tempShape.height);
              break;

          case "ellipse":
              p.ellipse(tempShape.positionX,tempShape.positionY,tempShape.width, tempShape.height);
              break;

        }
       

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
