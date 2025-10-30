function Book(props) {
  return <div className='book'>
    <img src={props.image} alt="Book Image" />
    <h1>{props.authName}</h1>
    <h2>{props.booKName}</h2>
  </div>
}


export default Book;