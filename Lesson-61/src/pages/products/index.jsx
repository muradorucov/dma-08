import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/card';

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=100")
        setProducts(res.data.products)
      } catch (error) {
        alert(error.message || error.response.data.message)
      }
    })();
  }, [])
  return (
    <div className='max-w-[1140px] mx-auto grid grid-cols-3 gap-[30px]'>

      {
        products?.map(product => <ProductCard product={product} />)
      }
    </div>
  )
}

export default Products