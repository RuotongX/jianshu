import React, {Component} from 'react';
import Header from './common/header/index';
import {GlobalStyle} from './statics/iconfont/iconfont';
import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
        <Provider store = {store}>
          <Header/>
          <GlobalStyle/>
        </Provider>
    );
  }
}

export default App;
