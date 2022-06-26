import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import '../css/App.css';
import ItemList from './Item_list';
import Detail from './Item_detail';
import Event from './Event'
import {data} from '../utils/data.js';


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

        {/* url parameter */}
        <Route path="/detail/:id" element={ <Detail item={ items }/> }/>

        {/* <Route path="/datail" element={ <Detail item={"hi"}></Detail> } /> */}
        <Route path="*" element={ <div> Not found 404 </div> } />

        <Route path="/event" element={ <Event /> } >  
          {/* nested routes */}
          <Route path="one" element={ <div>Give service if first buy</div> } />
          <Route path="two" element={ <div>Get Coupon with birth day</div> } />
        </Route>
      </Routes>

    </div>
  );
}

export default App;

