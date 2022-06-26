import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Detail(props) {
  let {id} = useParams();
  let item = props.item.find(x => x.id == id)
  let [view, setView] = useState(true);
  let [count, setCount] = useState(0);

  // html 로드 된 이후 실행
  // useEffect(Callback, variable or state)
  // 2번째 매개변수에 아무 값도 입력하지 않으면 계속 실행, []를 넣으면 1번만 실행
  // 특정 변수를 넣으면 그 변수가 변경될 때만 싫행
  useEffect(()=>{
    // run if component load or update
    // after start
    console.log('안녕');
    console.log(count);
    let hide = setTimeout(() => {
      setView(false);
    }, 2000)
    return () => {
      // useEffect의 2번째 매개변수에 []를 넣으면 unmonut시 1회 실행
      // before start
      clearTimeout(hide);
    }
  });


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
      {
        // styled-components
        view? <YellowBtn id="yellowBtn">Yellow Button</YellowBtn>: null
      }
      <button onClick={() => { setCount(count+1) } }>Count</button>
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