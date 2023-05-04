import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Context } from './Context';

export default function Navbar( { show , email } ) {

   
  const { setShow , setEmail } = useContext ( Context ) ;
 
  const logout = (e) => {
    setEmail("")
    setShow(true)
    
    
  }

  return (
    <div className='navbar'>
    <div className='nav'>
    {
      show ? 
    <>
      <Link to="/" className='link' > LogIn </Link>
      <Link to="/signup" className='link' > SignUp </Link>
      </>
       : 
      <Link to="/" className='link' onClick={logout}> Log-Out </Link>
    }
    </div>
    </div>
  )
}
