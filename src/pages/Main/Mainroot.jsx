import React from 'react'
import Navbar from "../../components/Main/Navbar";
import Footer from "../../components/Main/Footer";
import { Container } from "@mui/material";
import { Outlet } from 'react-router-dom';

function Mainroot() {
  return (
    <>
    <Navbar />
      <Container maxWidth="lg">
       <Outlet/> 
      <Footer />
      </Container>
    </>
  )
}

export default Mainroot