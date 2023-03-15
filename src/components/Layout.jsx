import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet></Outlet>
      <div>Foooter</div>
    </>
  )
}