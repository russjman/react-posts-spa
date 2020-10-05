import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/configureStore';

import Header from './components/Header';
import Posts from './components/Posts';

function App(props) {
  return (
    <Provider store={store}>
      <div className="PostsSPA">
        <Header />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
