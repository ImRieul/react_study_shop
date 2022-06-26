import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, subConut } from '../store';


function Cart() {

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      { state.user.name }의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
        {
          state.cart.map((value, index) => {
            return (
                <tr key={value.id}>
                  <td>{ value.id }</td>
                  <td>{ value.title }</td>
                  <td>{ value.count } </td>
                  <td>
                    <button onClick={() => { dispatch(addCount(index)) }}>+</button>
                    <button onClick={() => { dispatch(subConut(index)) }}>-</button>
                  </td>
                </tr>
            )
          })
        }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;