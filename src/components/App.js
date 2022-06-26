import { createContext, useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import axios from 'axios';

import '../css/App.css';
import ItemList from './Item_list';
import Detail from './Item_detail';
import Event from './Event'
import {data} from '../utils/data.js';

export let Context1 = createContext();  // context api

function App() {
  let [items, setItems] = useState(data);
  let [itemsNextCount, setItemsNextCount] = useState(0);  // ajax
  let [itemsNextView, setItemsNextView] = useState(true);  // ajax
  let [stock, setStock] = useState([10, 11, 12]);  // context api

  let getItem = () => {
    if (itemsNextCount === 0) {
      // axios는 자동으로 JSON -> object/array 변환을 해줌
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((response) => {
        setItems(items.concat(response.data));
        setItemsNextCount(itemsNextCount+1);
      })
      .catch(() => {
        console.log('false data2');
      })
    }
    else if (itemsNextCount === 1) {
      axios.get('https://codingapple1.github.io/shop/data3.json')
      .then((response) => {
        setItems(items.concat(response.data));
        setItemsNextCount(itemsNextCount+1);
        setItemsNextView(false);
      })
      .catch(() => {
        console.log('false data3')
      })
    }
  }

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
            { itemsNextView? <button onClick={getItem}>List Update</button> : null }
          </>
        } />

        {/* url parameter */}
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ items, stock }}>
            <Detail item={ items }/>
          </Context1.Provider>
        }/>

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

