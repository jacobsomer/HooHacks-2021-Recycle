import { Button, Navbar, NavDropdown,Nav } from 'react-bootstrap'
import React, {useState  } from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import logo from './logo.svg';
import './App.css';



function App() {
  const [color, setColor] = useState("primary");

  return (
    <div className="App">
      <>
        <Navbar bg={color} variant="dark">
          <Navbar.Brand href="#home">HooHacks 2021 Recycle</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={() => setColor("secondary")}>Home</Nav.Link>
            <Nav.Link href="#features">Demo</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Navbar>
      </>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
