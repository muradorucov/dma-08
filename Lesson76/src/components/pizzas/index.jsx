import { useState } from "react"
import { data } from "../../data"
import Card from "../pizzacard"
import Search from "../search"

function Pizzas() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="max-w-[1320px] mx-auto mt-10 w-[75%] flex flex-col items-center">
      <Search setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-4 gap-7">
        {
          data.filter(pizza => pizza.name.includes(searchTerm)).map(pizza => <Card
            key={pizza.id}
            pizzaName={pizza.name}
            pizzaImage={pizza.img}
            pirce={pizza.price}
          />)
        }
      </div>
    </div>
  )
}

export default Pizzas