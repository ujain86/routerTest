import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Nav() {
  return (
    <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        
        <Outlet />
    </>
    
  )
}

export default Nav