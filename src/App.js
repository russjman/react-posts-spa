import React from 'react';
import './App.css';

import Header from './components/Header';
import Posts from './components/Posts';

function App(props) {

  return (
    <div className="PostsSPA">
      <Header />
      <Posts />
    </div>
  );
}

export default App;
