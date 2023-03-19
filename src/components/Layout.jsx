import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
      <div id="modal-root"></div>
    </>
  )
}
