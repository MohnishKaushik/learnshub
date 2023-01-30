import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
export default function About() {
    const navigate = useNavigate()
    const goToContact =()=> {
        navigate('/contact')
    }
  return (
    <div>
        {/* <header>
            <a href='/'>Logo</a>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mohnish">Mohnish</NavLink>
                    </li>
                </ul>
            </nav>
        </header> */}
        <h1>About Page</h1>
        <button onClick={goToContact}>Go To Contact</button>
    </div>
  )
}

