import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from "react-redux";

import { addCart } from "../store.js";
import { Context1 } from './App.js'

function Detail(props) {
  let {id} = useParams();
  let item = props.item.find(x => x.id == id);
  let [tab, setTab] = useState(0);  // tab UI
  let [animation, setAnimation] = useState('start');  // tab UI
  let { stock } = useContext(Context1);  // context api

  let dispatch = useDispatch();  // redux

  useEffect(() => {
    setTimeout(() => { setAnimation('start end') }, 100);
    return (
      setAnimation('start')
    )
  }, [])

  localStorage.getItem('watched');

  return (
    <div className={`container ${animation}`}>
      <div className="row">
        <div className="col-md-6">
          <img src={ item.img } width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ item.title }</h4>
          <p>{ item.content }</p>
          <p>{ item.price }</p>
          <div>{ stock[0] }</div>
          <button className="btn btn-danger">Flex</button>
          <button className="btn btn-primary" onClick={() => {
            dispatch(addCart(item));
          }}>add Cart</button>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} item={item}></TabContent>
    </div> 
  )
}

export default Detail;


function TabContent(props) {
  let [animation, setAnimation] = useState('start')

  useEffect(() => {
    setTimeout(() => { setAnimation('start end') }, 100);
    return (
      setAnimation('start')
    )
  }, [props.tab])

  return (
    <div className={animation}>
      { [<div>content 0</div>, <div>content 1</div>, <div>content 2</div>][props.tab] }
    </div>
  )
}