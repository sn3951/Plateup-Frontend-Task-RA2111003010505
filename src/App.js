import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Main from './components/Main/Main';
import Steps from './components/Steps/Steps'
function App() {
  return (
    <div className="App">
      <Navbar />
        <Main />
        <Steps/>
    </div>
  );
}

export default App;
