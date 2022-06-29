import { useNavigate } from 'react-router-dom';

function ItemList(props) {
  let navigator = useNavigate();

  return (
    <div className="col-md-4">
      {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} />  */}
      <img src={ props.item.img } onClick={() => { navigator(`/detail/${props.item.id}`)}} width="80%"></img>
      <h4>{ props.item.title }</h4>
      <p>{ props.item.content }</p>
    </div>
  )
}

export default ItemList;