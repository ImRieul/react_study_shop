import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Detail(props) {
  let {id} = useParams();
  let item = props.item.find(x => x.id == id)

  // html 로드 된 이후 실행
  useEffect(()=>{
    // run if component load or update
    console.log('안녕');
    console.log(count);
    setTimeout(() => {
      document.getElementById('yellowBtn').style.visibility = 'hidden';
      document.getElementById('countBtn').style.visibility = 'hidden';
    }, 2000)
  });

  let [count, setCount] = useState(0);

  return (
    <div className="container">
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
      {/* styled-components */}
      <YellowBtn id="yellowBtn">Yellow Button</YellowBtn>
      <button id='countBtn' onClick={() => { setCount(count+1) }}>Count</button>
    </div> 
  )
}

export default Detail;


// styled-components
// css 기능을 js로 할 수 있음, 굳이 써야 할 이유는 모르겠음.
let YellowBtn = styled.div` 
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px; 
  background-color : yellow;
`; 