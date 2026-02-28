import React from 'react'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <nav></nav>
      <Outlet />
      <footer></footer>
    </>
  )
}

export default Layout