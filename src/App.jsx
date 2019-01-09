import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Whiteboard"
      };
    }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <div className="Wrapper">
              <div className="Title">Whiteboard</div>
            </div>
          </header>
        </div>
      );
    }
  }

export default App;
