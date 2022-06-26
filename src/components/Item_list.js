function ItemList(props) {
    return (
      <div className="col-md-4">
        {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} />  */}
        <img src={ props.item.img } width="80%"></img>
        <h4>{ props.item.title }</h4>
        <p>{ props.item.content }</p>
      </div>
  )
}

export default ItemList;