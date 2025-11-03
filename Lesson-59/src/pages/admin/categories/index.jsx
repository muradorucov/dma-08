import { useEffect, useState } from "react"
import { getAllCategoriesForAdmin } from "../../../services/category";
import Table from "../../../components/common/Table";
import { columns } from "./columns";

function Categories() {


  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCategoriesForAdmin();
        setCategories(data.categories)
      } catch (error) {
        alert(error.message)
      }
    })();
  }, [])
  return (
    <div>
      <h1>Categories</h1>
      <Table columns={columns} data={categories} />
    </div>
  )
}

export default Categories