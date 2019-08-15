import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import './App.css';

const App = () => {

  const homeRef = React.useRef('HOME')
  const aboutRef = React.useRef('ABOUT')
  const projectRef = React.useRef('PROJECT')

  const completeKey = e => {
        console.log('click ', e);
     
        switch (e) {
          case 'HOME':
            return scrollToRef(homeRef)
          case 'ABOUT':
            return scrollToRef(aboutRef)
          case 'PROJECT':
            return scrollToRef(projectRef)
          default:
            return null;
        }

  };

  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)   // General scroll to element function
  
  

  

  return (
    <div >
      <Header completeKey={completeKey}  />
      <Home id="Home" ref={homeRef}/>
      <About id="About" ref={aboutRef}/>
      <Project id="Project" ref={projectRef}/>
    </div>
  );
}





export default App;
