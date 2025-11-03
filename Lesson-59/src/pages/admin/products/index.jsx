import React, { useEffect, useState } from 'react'
import { getAllProductsForAdmin } from '../../../services/products';
import Table from '../../../components/common/Table';
import { columns } from './columns';

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllProductsForAdmin();
        setProducts(data.data);
      } catch (error) {
        alert(error.message)
      }
    })();
  }, [])
  return (
    <div>
      <h1>Products</h1>
      <Table columns={columns} data={products} />
    </div>
  )
}

export default Products