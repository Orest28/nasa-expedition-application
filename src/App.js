import React from 'react';

import Main from './components/Main';

import './App.scss';
import { Provider } from 'react-redux';
import store from './store';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  )
}

export default App;