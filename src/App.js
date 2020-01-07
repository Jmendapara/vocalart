import React, { Component } from 'react';
import { render } from "react-dom";
import P5Wrapper from "react-p5-wrapper";
import p5 from "p5";
import logo from './logo.svg';
import './App.css';
import Sketch from 'react-p5';

class App extends Component {

  constructor(){

    super();
    this.state = {
      numberOfTracksEntered: 50
    }

    this.handleRecord = this.handleRecord.bind(this);

  }


  handleRecord(){

    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    window.SpeechGrammarList = window.webkitSpeechGrammarList || window.SpeechGrammarList;

    let grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'

    const recognition = new window.SpeechRecognition();

    var speechRecognitionList = new window.SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);

    recognition.continuous = true;
    recognition.grammars = speechRecognitionList;


    recognition.onresult = function(event){
    console.log(event);
    //recognition.re
    //recognition.start();

    }

    recognition.continuous=true;
    recognition.start();


  }

  sketch(p) {
    
    p.setup = () => {
      p.createCanvas(window.innerWidth - 100, window.innerHeight - 100);
      p.background(102);

    };

    p.draw = () => {
      p.stroke(255);
      if (p.mouseIsPressed === true) {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
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
