import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
export default function Contact() {
  const navigate = useNavigate()
  const goToAbout =()=> {
    navigate('/about')
  }
  const goToHome =()=> {
    navigate('/')
  }
  return (
    <>
      <h1>Contact Page</h1>
      <button onClick={goToAbout}>Go To About</button>
      <button onClick={goToHome}>Go To Home</button>
      <Outlet/>
    </>

  )
}

