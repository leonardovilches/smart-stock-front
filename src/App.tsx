import React from 'react';
import HeaderComp from './components/Header';
import NavComp from './components/Nav';
import ContentContainer from './components/ContentContainer';
import "./App.css";

function App() {

  const LogginAccount = false

  return (
    <div className="App">
      {
      LogginAccount ? (
        <div>Hello</div>
      ) : (
        <div className="layout">
          <HeaderComp />
          <NavComp />
          <ContentContainer />
        </div>
      ) 
      }
    </div>
  );
}

export default App;
