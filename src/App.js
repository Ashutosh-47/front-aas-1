import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Context } from './Components/Context';

export default function App() {

  const [ show , setShow ] = useState ( true ) 

  const [ email , setEmail ]  = useState ("")

  return (

    <div className='app'>
<div>
  
<BrowserRouter>

<Context.Provider  value = { { setShow , setEmail  } } >

<Navbar show = {show} email={email} />
 
<Routes>

  <Route path="/" element={<Login email={email}/>}/>
   
    <Route path="/signup" element={<Signup email={email} />} />
  
    <Route path="/home" element={<Home email = {email} />} />    

</Routes>


</Context.Provider>

</BrowserRouter>

  </div>      
     
    </div>
  )
}
