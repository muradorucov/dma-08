import { useEffect, useState } from "react"

function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then(res => res.json())
      .then(data => setList(data))
  }, [])
  return (
    <div>
      <ul>
        {list.map(item => <li key={item.id}>{item.companyName}</li>)}
      </ul>
    </div>
  )
}

export default App