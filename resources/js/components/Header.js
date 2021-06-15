import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
 
const Header = () => (
    <nav className='navbar navbar-success bg-success'>
        <div>
            <img src={logo} style={{maxHeight: "100px", maxWidth: "100px"}} className="logo"/>
        </div>
        <div className='container'>
            <Link className='navbar-brand text-white' to='/'>Rumah Sakit Melati Indah</Link>
        </div>
    </nav>
)
 
export default Header
