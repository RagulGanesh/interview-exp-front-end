import React, { useState } from 'react'
import "../static/style.css"
import { Link, useNavigate } from 'react-router-dom';
export const Login = () => {
  const [rollno,setRollno]=useState('');
  const [password,setPassword]=useState('');
  const Navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch(`http://localhost:4000/login`,{
            method:'POST',
            headers:{
              "Content-Type": "application/json",
  
            },
            body:JSON.stringify({rollno,password})
          })
          const json=await response.json();
          console.log(json)
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            Navigate("/home")
            alert("Logged in successfully")
          }
          else{
            alert("Invalid Details")
          }
  }
  return (

    <div className='mt-5 d-flex flex-column  justify-content-center container w-50 border border-dark p-3 border-2 rounded'>
      <h1 className='text-center'>Login</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column gap-3 justify-content-between'>
        <label htmlFor="rollno">Roll No :</label>
        <input value={rollno} onChange={e=>{setRollno(e.target.value)}} className='form-control' type="text" id='rollno' placeholder='Enter Your Roll No'/>
        <label htmlFor="password">Password :</label>
        <input value={password} onChange={e=>{setPassword(e.target.value)}} className='form-control' type="text" id='password' placeholder='Password'/>
        <input type="submit" className='btn btn-dark' />
        <div className='d-flex'>
        <p>Not a registered User ?</p>
        <Link className="red" to="/signup">Sign Up</Link>
        </div>
        
      </form>
    </div>

   
  )
}
