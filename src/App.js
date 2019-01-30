import React, {Component, Fragment} from 'react';
import {GlobalStyle} from  './style';
import Header from './common/header/index';


class App extends Component {
  render() {
    return (
        <Fragment>
          <Header/>
          <GlobalStyle/>
        </Fragment>
    );
  }
}

export default App;
