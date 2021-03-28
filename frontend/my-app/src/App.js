import { Button, Navbar, NavDropdown,Nav } from 'react-bootstrap'
import React, {useState  } from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import ParticleAnimation from './components/particles'
import { ReactComponent as Logo } from './images/logo1.svg';
import fish from './images/fish.svg';
import plastic from './images/plastic.jpg';
import FadeInSection from './components/fadein';
import './App.css';



function App() {
  const [color, setColor] = useState("primary");

  const [isVisible, setVisible] = React.useState(true);
  

  return (
    <>
    
    <div className="App">
      
      <>
        <Navbar bg='dark' variant="dark" fixed="top" >
          <Navbar.Brand href="#home">HooHacks 2021 Recycle</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={() => setColor("secondary")}>Home</Nav.Link>
            <Nav.Link href="#features">Demo</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Navbar>
      </>
      <ParticleAnimation >
        
      </ParticleAnimation>
      <header className="App-header">
          
          <div id="container" style={{position:'absolute'}}>
            <div className="typewriter" >
              <h3>  
                Welcome to Blank a Hoohacks 2021 Project
              </h3>
              
            </div>
            {/* <Logo fill="red" stroke="green" /> */}
          </div>
        </header> 
      
        
      
      <div id="plastic" style={{height:'100vh', backgroundColor:'#282c34'}}>
        <FadeInSection>
        <div style={{position:'relative',left:'20vw',height:'20vh',width:'60vw',background:'#282c34',opacity:'.8',top:'10vh'}}>
            <h3 style={{color:'#fff',position:'relative',top:'10%'}}>
              The average American consumer produces 1,642 pounds of trash per year.
            </h3> 
          </div>
        </FadeInSection>
        <FadeInSection>
          <div style={{position:'relative',left:'20vw',height:'20vh',width:'60vw',background:'#282c34',opacity:'.8',top:'20vh'}}>
            <h3 style={{color:'#fff',position:'relative',top:'10%'}}>
              The average college student produces 640 pounds of trash annually, the majority of which accumulates at the end of the year during move-out.
            </h3> 
          </div>
        </FadeInSection>
        <FadeInSection>
          <div style={{position:'relative',left:'20vw',height:'20vh',width:'60vw',background:'#282c34',opacity:'.8',top:'30vh'}}>
            <h3 style={{color:'#fff',position:'relative',top:'10%'}}>
              Plastic pollution threatens food safety and quality, human health, coastal tourism, and contributes to climate change.

            </h3> 
          </div>
        </FadeInSection>
      </div>
      
      <div style={{height:'100vh',backgroundColor:'#282c34'}}>
        <FadeInSection id="solution">
            <h1 style={{color:'#fff',top:'10vh',position:'relative'}}>
              This is our solution.
            </h1> 
        </FadeInSection>
        <FadeInSection id="solution">
            <h3 style={{color:'#fff',top:'30vh',position:'relative',left:'0vw'}}>
            Transparency, education, and the tools to make recycling easier.
            </h3> 
        </FadeInSection>
        <img src={fish} style={{position:'relative',top:"20vh"}} styleclassName="App-logo" alt="logo" />
        <img src={'https://upload.wikimedia.org/wikipedia/commons/9/9c/Ic_phone_android_48px.svg'} style={{position:'relative',top:"20vh"}} styleclassName="App-logo" alt="logo" />
      </div>
      
     
      
    </div>
    </>
  );
}

export default App;
