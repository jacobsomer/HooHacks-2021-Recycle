import { Button, Navbar, NavDropdown,Nav } from 'react-bootstrap'
import React, {useEffect,useState  } from "react";
import ReactDOM from "react-dom";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import ParticleAnimation from './components/particles'
import { ReactComponent as Logo } from './images/logo1.svg';
import fish from './images/fish.svg';
import plastic from './images/plastic.jpg';
import FadeInSection from './components/fadein';
import './App.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Pdf from './images/ml.pdf';
import {ReactComponent as DownArrow} from './images/down.svg';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Trash from './images/trash.png'
import Image from 'react-bootstrap/Image'
import rightarrow from './images/right-arrow.png'
import clutter from './images/clutter.png'
import FadeIn from 'react-fade-in';
import { Tensor, InferenceSession } from "onnxjs";
import net from './images/net.png';
import earth from './images/earth.png';
import Demo from './components/demo.js'
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const [color, setColor] = useState("primary");
  const [pressed, setButton] = useState(false);
  const [page, setPage] = useState(false);

  const [isVisible, setVisible] = React.useState(true);
  const { height, width } = useWindowDimensions();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };


  // onnx 
  const onnx = require('onnxjs-node');
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  const session = new InferenceSession({backendHint: 'cpu'});
  const url = "./model/onnx_lenet_standard.onnx";
  
  const imageData = ctx.getImageData(0, 0, 280, 280);
	const { data } = imageData;
  const dataTensor = new Tensor(new Float32Array(313600), "float32",[313600]);
  const loadModel = async()=>{
   try{
     // model
    
    
    await session.loadModel(url);
    
    // const outputMap = await session.run(inputs);
    // const outputTensor = outputMap.values().next().value;

   }
   catch(e){
     console.warn(e);
   }
 }

 const testModel= async()=>{
  try{
    // model
   
   const outputMap = await session.run([dataTensor]);
   const outputTensor = outputMap.values().next().value;
   console.log("hello");
  }
  catch(e){
    console.warn(e);
  }
}
 

  


  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  const classes = height<=scrollPosition+height/5? 'basket' : 'basket hide';

  const classes1 = height*2<=scrollPosition+height/5 ? 'basket1' : 'basket1 hide';
  
  return (
    <>
    
    <div className="App">
      
      <>
        <Navbar bg='dark' variant="dark" fixed="top" >
          <Navbar.Brand href="#home" >HooHacks 2021 Recycle</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={() => {setColor("secondary");setPage(false);} }>Home</Nav.Link>
            <Nav.Link href="#features" onClick={() => setPage(true)}>Demo </Nav.Link>
            <Nav.Link href="#pricing" >About</Nav.Link>
            <Nav.Link href="#pricing">{scrollPosition}</Nav.Link>
          </Nav>
        </Navbar>
      </>
     
        {!page? 
        <>
      <ParticleAnimation >
        
      </ParticleAnimation>
      <header className="App-header">
          
          <div id="container" style={{position:'absolute'}}>
            <div className="typewriter" >
              <h3>  
                Welcome to Blank a Hoohacks 2021 Project
              </h3>
            </div>
            <div style={{postion:'absolute'}}>
                <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                    <Button variant="dark" trailingIcon="picture_as_pdf" label="Resume">
                      Click Here for our Presentation
                    </Button>
                </a>
            </div>
            
            
            
            {/* <Logo fill="red" stroke="green" /> */}
          </div>
          <button id="button" style={{borderColor:'transparent',background:'transparent',bottom:'3vh',position:'absolute'}} onClick={() => { scroller.scrollTo('Plastic', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            }); setButton(true);}}>
              <svg width="70" height="55" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                <path d="M0,0 l35,50 l35,-50" fill="none" stroke="black" stroke-linecap="round" stroke-width="5" />
              </svg>
          </button>
          <button id="button" style={{borderColor:'transparent',background:'transparent',bottom:'-97vh',position:'absolute'}} onClick={() => scroller.scrollTo('Solution', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })}>
              <svg width="70" height="55" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                <path d="M0,0 l35,50 l35,-50" fill="none" stroke="black" stroke-linecap="round" stroke-width="5" />
              </svg>
          </button>
        </header> 
        
        
      
      <div id="plastic" className="Plastic" style={{height:'100vh', backgroundColor:'#282c34'}}>
        
        <div className={classes}>
          <div>
              <Jumbotron style={{position:'absolute',left:'10vw',top:'110vh',height:'20vh',width:'35vw',backgroundColor:'#282c34',opacity:'.9'}}>
                  <h5 style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'2vh'}}>
                  The average American consumer produces 1,642 pounds of trash per year.
                  </h5> 
                  <li style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'1vh'}}>
                    <a target="_blank" href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/national-overview-facts-and-figures-materials">Environmental Protection Agency</a>
                  </li> 
              </Jumbotron>
          </div>

          <div>
            <Jumbotron style={{position:'absolute',left:'10vw',top:'140vh',height:'20vh',width:'35vw',backgroundColor:'#282c34',opacity:'.9'}}>
              <h5 style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'2vh'}}>
              By 2050, there will be more plastic than fish in the world’s oceans.
              </h5> 
              <li style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'1vh'}}>
                <a target="_blank" href="https://www.washingtonpost.com/news/morning-mix/wp/2016/01/20/by-2050-there-will-be-more-plastic-than-fish-in-the-worlds-oceans-study-says/">Washington Post</a>
              </li> 
            </Jumbotron>
          </div>
          <div>  
            <Jumbotron style={{position:'absolute',left:'10vw',top:'170vh',height:'20vh',width:'35vw',backgroundColor:'#282c34',opacity:'.9'}}>
              <h5 style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'2vh'}}>
              75 percent of waste produced in the U.S. is capable of being recycled.
              </h5> 
              <li style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'1vh'}}>
                <a target="_blank" href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/national-overview-facts-and-figures-materials">Environmental Protection Agency</a>
              </li>    
            </Jumbotron>
          </div>
          <div>  
            <Jumbotron style={{position:'absolute',left:'55vw',top:'110vh',height:'20vh',width:'35vw',backgroundColor:'#282c34',opacity:'.9'}}>
              <h5 style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'2vh'}}>
              The average college student produces 640 pounds of trash annually.
              </h5>      
              <li style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'1vh'}}>
                <a target="_blank" href="https://www.planetaid.org/blog/curbing-the-college-waste-problem">Planet Aid</a>
              </li> 
            </Jumbotron>
          </div>
          <div>
            <Jumbotron style={{position:'absolute',left:'55vw',top:'140vh',height:'20vh',width:'35vw',backgroundColor:'#282c34',opacity:'.9'}}>
              <h5 style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'2vh'}}>
                Plastic pollution threatens food safety and quality, human health, coastal tourism, and contributes to climate change.
              </h5> 
              <li style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'1vh'}}>
                <a target="_blank" href="https://www.iucn.org/resources/issues-briefs/marine-plastics#:~:text=Marine%20species%20ingest%20or%20are,and%20contributes%20to%20climate%20change.">International Union for Conservation of Nature</a>
              </li> 
            </Jumbotron>
          </div>
          <div>
            <Jumbotron style={{position:'absolute',left:'55vw',top:'170vh',height:'20vh',width:'35vw',backgroundColor:'#282c34',opacity:'.9'}}>
              <h5 style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'2vh'}}>
                The U.S recycling rate has plateaud at 34% with no improvement since 2010.
              </h5> 
              <li style={{color:'#fff',position:'relative',verticalAlign:'center',fontSize:'1vh'}}>
                <a target="_blank" href="https://www.nbcnews.com/think/opinion/everything-americans-think-they-know-about-recycling-probably-wrong-ncna994261">NBC News</a>
              </li>  
            </Jumbotron>
          </div>
        </div>
      </div>
      
      <div  className="Solution"  style={{height:'100vh',backgroundColor:'#282c34'}}>
        <FadeInSection id="solution">
            <h1 style={{color:'#fff',top:'10vh',position:'relative'}}>
              The Solution
            </h1> 
        </FadeInSection>
        {/* <FadeInSection id="solution">
            <h3 style={{color:'#fff',top:'30vh',position:'relative',left:'0vw'}}>
            Transparency, education, and the tools to make recycling easier.
            </h3> 
        </FadeInSection> */}
       <div className={classes1}>
          <Image src={Trash} 
          style={{position:'absolute',maxWidth:'18vh',maxHeight:'18vh',top:'240vh',left:'10vw'}}fluid/>
          <Image id="clutter" src={clutter} 
          style={{position:'absolute',maxWidth:'18vh',maxHeight:'18vh',top:'220vh',left:'10vw'}}fluid/>
          {/* <Image src={rightarrow} 
          style={{position:'absolute',maxWidth:'23vh',maxHeight:'23vh',top:'240vh',left:'20vw'}}fluid/> */}
          
          <div className="Conveyor">
            <div>
              🗑️
            </div>
            
          </div>
          <div className="Conveyor1">
            <div>
            🥤
            </div>
            
          </div>
          <div className="Conveyor2">
            <div>
              🍌
            </div>
          </div>
          <div className="Conveyor3">
            <div>
              🔋
            </div>
          </div>
         
          {/* 🥤♻️🍌 */}
          <Image id="net" src={net} 
          style={{position:'absolute',maxWidth:'40vw',maxHeight:'30vh',top:'239vh',left:'40vw'}}fluid/>
         
          <div >
            <div style={{position:'absolute',top:'240vh',fontSize:'2vw',right:'14vw'}}>
            🥤🥤🥤🥤
            </div>
            
          </div>
          <div >
            <div style={{position:'absolute',top:'250vh',fontSize:'2vw',right:'13vw'}}>
              🍌🍌🍌🍌
            </div>
          </div>
          <div >
            <div style={{position:'absolute',top:'260vh',fontSize:'2vw',right:'15vw'}}>
              🔋🔋🔋🔋
            </div>
          </div>
          <Image id="net" src={earth} 
          style={{position:'absolute',maxWidth:'40vw',maxHeight:'30vh',top:'220vh',left:'40vw'}}fluid/>
          </div>
      </div> 
   </>
      :<div style={{position:'absolute',top:'20vh',left:'0vw'}}>
        <Demo /></div>}
    </div>
    
    
    </>
  );
}

export default App;
