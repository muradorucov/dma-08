import Card from "./components/Card"

const products = [
  {
    id: 1,
    img: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    price: "19.99",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application."
  },
  {
    id: 2,
    img: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    price: "19.99",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application."
  },
  {
    id: 3,
    img: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    price: "19.99",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application."

  }
]

function App() {

  return (
    <>
      {
        products.map((item) => {
          return <Card
            key={item.id}
            img={item.img}
            price={item.price}
            description={item.description}
          />
        })
      }
    </>
  )
}

export default App