import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import './App.css';

const App = () => {
   const completeKey = e => {
        console.log('click ', e);
  };
  
  return (
    <div >
       <Header completeKey={completeKey} style={headStyle} />
       <Home/>
       <About/>
      <Project/>
    </div>
  );
}

const headStyle = {
    'position':'fixed'
}



export default App;
