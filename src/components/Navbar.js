import React from 'react';
import { FaRocket } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaRocket className='icon' />
                <h1> Crypto <span className='purple'>Currency</span></h1>
            </div>
        </Link>
    )
}

export default Navbar