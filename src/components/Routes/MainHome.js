import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

export default function MainHome() {
    const navigate = useNavigate()
    const goToPrevious =()=> {
        navigate(-1)
    }
    return (
        <>
            <Header />
            <button onClick={goToPrevious}>Go To Previous Page</button>
            <Outlet />
            
        </>
    )
}
