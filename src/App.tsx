import React from 'react';
import logo from './logo.svg';
import Author from './Pages/Author';
import './App.css'
import { store } from './Redux/Store';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Author />
      </Provider>
    </div>
  );
}

export default App;
