import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css'

import '../css/App.css';
import ItemList from './ItemList';
import {data} from './data.js';

function App() {
  let [items, setItems] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {
                  items.map( (value) => {
                    return( 
                      <ItemList item={ value } key={value.id}></ItemList>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
      </Routes>

    </div>
  );
}

export default App;