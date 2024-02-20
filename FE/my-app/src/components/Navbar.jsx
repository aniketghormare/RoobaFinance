import React from 'react'
import "../styles/Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../images/logo.png";
const Navbar = () => {
    const navigate=useNavigate()
    const handlebtn=()=>{
        navigate("/signup")
    }
    return (
        <div className='navbar'>
            <div className='nav1'>
            <img  src={logo} alt="" />
            {/* Rooba_White.png */}
            {/* Logo */}
            </div>
            <div className='nav2'>
                <Link style={{textDecoration: 'none',color:"#F2F2F2"}}>Opportunities</Link>
                <Link style={{textDecoration: 'none',color:"#F2F2F2"}}>How it Works</Link>
                <Link style={{textDecoration: 'none',color:"#F2F2F2"}}>About Us</Link>
                <button onClick={handlebtn}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
