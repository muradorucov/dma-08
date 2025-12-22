import Header from './header'
import HeaderContact from './contact'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <Header />
      <HeaderContact />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout