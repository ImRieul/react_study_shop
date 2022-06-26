function Detail(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={ props.item.img } width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ props.item.title }</h4>
          <p>상품설명</p>
          <p>props.item.price</p>
          <button className="btn btn-danger">Flex</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;