import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

function Detail(props) {
  let {id} = useParams();
  let item = props.item.find(x => x.id == id)
  let [tab, setTab] = useState(0);  // tab UI
  let [animation, setAnimation] = useState('start')  // tab UI

  useEffect(() => {
    setTimeout(() => { setAnimation('start end') }, 100);
    return (
      setAnimation('start')
    )
  }, [])

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
          <button className="btn btn-danger">Flex</button> 
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