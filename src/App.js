import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import './App.css';

const App = () => {
   const completeKey = e => {
        console.log('click ', e);
  };
  
  return (
    <div >
       <Header completeKey={completeKey} style={headStyle} />
       <Home/>
    </div>
  );
}

const headStyle = {
    'position':'fixed'
}



export default App;
