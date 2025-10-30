import Book from "./components/book";
import bookImage from "./img/book.jpg";

function App() {
  return <div className='books'>
    <Book
      image={bookImage}
      authName="Robert"
      booKName="Varli Ata Kasib Ata"
    />
    <Book
      image={bookImage}
      authName="Robert 1"
      booKName="Varli Ata Kasib Ata 1"
    />
  </div>
}

export default App;