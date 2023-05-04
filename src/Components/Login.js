import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Context } from './Context';

export default function Login({email}) {

  const { setShow , setEmail } = useContext ( Context ) ;

  
  
  const history = useNavigate() ;                                // To navigate

  
  const [ password , setPassword ] = useState ('')

  
  const submit = async ( e ) => {

    e.preventDefault() ;


  

try {
      
      const response = await fetch("https://backaas.adaptable.app/", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ( { email: email , password: password })

    });
    const json = await response.json()
    console.log(json);
  

         if ( json.success )    {
          setShow(false)
          history ( "/home" , { state: { id: email } } )
          
         }      

      else {
        alert( "Please Enter Details Correctly")
        console.log(email, password)
      } 
    }
    
    catch ( err ) { 
      alert( "Please Enter Details Correctly")
      console.log ( err ) 
    }
  } 



  return (
    <div className='login'>
    
    <div className='log' >

<h1> Please LogIn to Enjoy services </h1>   
   
   <form className='form'>

   Email: <input className='email' type='email'  onChange = { ( e ) => { setEmail( e.target.value) }  } name='email' placeholder='Enter Your Email' />


   Password: <input className='password' type='password'  onChange = { ( e ) => { setPassword( e.target.value) } } name='password' placeholder='Enter Your Password' />

  <div className='btn'>
  <button type='submit' className='submit' onClick={submit} >LogIn</button>

<Link to="/signup" className='submitLink' > SignUp </Link>

  </div>
   </form>

 </div>
    </div>
  )
}
