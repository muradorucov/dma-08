import { createRoot } from 'react-dom/client'

let userName = "MuradOrucov"
function Book() {
  return <div>
    <h2>Book Title</h2>
    <p>Book Author</p>
    <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt="" style={{ width: "400px" }} />
  </div>
}

createRoot(document.getElementById('root')).render(
  <div>
    <h1>{userName}</h1>
    <Book />
    <Book />
  </div>
)



// Components base
// Props
// State
// Life cycle