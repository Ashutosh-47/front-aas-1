import React, { useEffect, useState } from 'react'

export default function Home ( {email} ) {

  const [ edit , setEdit ] = useState(true)

  const [ obj , setobj ] = useState( { 
    id: "" ,
    email: email ,
    name: "" ,
    password: "",
   } )

useEffect(  () => {            //https://backaas.adaptable.app/

    fetch("https://backaas.adaptable.app/getDetail").then( (res) => res.json()).then ( (arr)=>{
     
    const data = arr.find ( (e) => e.email == email ) 

    setobj({
      id: data._id ,

      email: email,
      name: data.name,
      password: data.password
    })

      console.log(data)

    }).catch ((e) => {
      console.log(e)
      alert("Please Fill correctly")
    })
  

}, [])


 const editbtn = (e) => {
  e.preventDefault();
  setEdit(false)
 }

 const change = ( e ) => { setobj( { ...obj , [e.target.name] : e.target.value } ) }

 const submit = async ( e ) => {
 
  e.preventDefault();

 try {

  if ( obj.name !== "" && obj.password !== "" ) {

  console.log ( obj )    
  
  const response = await fetch("https://backaas.adaptable.app/edit", {
  
  method: 'POST',
  headers: {  'Content-Type': 'application/json' } ,
  body: JSON.stringify ( { name: obj.name , password: obj.password , id : obj.id } )
});

const json = await response.json()

console.log(json);


  if ( json.success )      alert("Changes are Done")

  else if ( !json.success )   alert( "Please Fill form Correctly")

}

else alert ( "Please Fill all the Details" )
 }
catch ( err ) { 
  console.log ( err )
  alert ( "Please Fill all the Details" )
}

} 

  return (
  
  <div className='home'>

      <h1> Your Details </h1>
      
      <form className='formhome'>
        
        <p>Email: {obj.email}</p>

        {
          edit ? 
          <>
          <p>Name: {obj.name} </p>
          <p>Password: {obj.password} </p>
        </> 
        : 
          
          <>
          <p>Name: <input type='text' name='name' onChange={change} /></p>
          <p>Password: <input type='password' name='password' onChange={change} /></p>
          </>
        }

        <button  className="button" onClick = { editbtn } >EDIT</button>
      
        <button  className="button" onClick = { submit } >SAVE</button>

    </form>
    </div>
  )
}
