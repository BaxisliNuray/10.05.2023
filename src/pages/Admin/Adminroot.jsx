import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Admin/Footer'

function Adminroot() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Adminroot