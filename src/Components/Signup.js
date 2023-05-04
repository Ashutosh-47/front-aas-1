import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Context } from './Context';


export default function Signup({email}) {

  const history = useNavigate() ;           // To navigate

  const { setShow , setEmail } = useContext ( Context ) ;


  const [ name , setName ] = useState ('')
  const [ password , setPassword ] = useState('')

  const submit = async ( e ) => {

    e.preventDefault() ;

    
    try {
      
      const response = await fetch("https://backaas.adaptable.app/signup", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ( { name: name , email: email, password: password } )

    });
    const json = await response.json()
    console.log(json);
  

      if ( json.success )  alert( "User Already Exist")               // In Signup if user exist show message, to enter new user                                  
      
      else if ( !json.success ) {
        setShow(false)
        history("/" , { state: { id: email } } ) 
        
      }  


    }
    catch ( err ) { console.log ( err ) }
  } 


  return (
  <div className='login'>
  
  <div className='log' >
 
 <h1> Please SignUp to Enjoy services </h1>   
    
    <form  className='form'>

    Name: <input className='name' type='text'  onChange = { ( e ) => { setName( e.target.value) }  } name='name' placeholder='Enter Your Name' /> 
    Email: <input className='email' type='email'  onChange = { ( e ) => { setEmail( e.target.value) }  } name='email' placeholder='Enter Email' />


   Password: <input className='password' type='password'  onChange = { ( e ) => { setPassword( e.target.value) } } name='password' placeholder='Enter Password' />

  
<div className='btn' >
<button type='submit' className='submit' onClick={submit} >Signup</button>

<Link to="/" className='submitLink' > LogIn </Link>

</div>
     </form>
 
  </div>

</div>
 
  )
}
