function Card(props) {
  return (
    <div id='product-card'>
      <img src={props.img} alt="" />
      <p>{props.description}</p>
      <p>Price: {props.price} USD</p>
      <button>Add to cart</button>
    </div>
  )
}

export default Card