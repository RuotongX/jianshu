import React, { Component } from 'react';
import {GlobalStyle} from  './style';


class App extends Component {
  render() {
    return (
      <div className = 'background'>
        Hello World
        <GlobalStyle/>
      </div>
    );
  }
}

export default App;
