import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Products from './pages/products'
import Cart from './pages/cart'
import FavList from './pages/fav'
import { useSelector } from 'react-redux'
import Toasts from './components/toast'

function App() {
  const { cartList, toast } = useSelector(state => state);

  console.log("App Js",toast);
  


  return (
    <BrowserRouter>
      {
        toast.isToast ? <Toasts data={toast.data} /> : null
      }
      <nav className='flex text-[blue] gap-[30px] underline'>
        <Link to={"/"}>Products</Link>
        <Link to={"/cart"}>Cart page <span>{cartList.reduce((acc, item) => acc += item.count, 0) || ""}</span></Link>
        <Link to={"/favorite"}>Favorite</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<FavList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App