import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export const Login = () => {
  const [rollno,setRollno]=useState('');
  const [password,setPassword]=useState('');
  return (

    <div className='mt-5 d-flex flex-column  justify-content-center container w-50 border border-dark p-3 border-2 rounded'>
      <h1 className='text-center'>Login</h1>
      <form className='d-flex flex-column gap-3 justify-content-between'>
        <label htmlFor="rollno">Roll No :</label>
        <input value={rollno} onChange={e=>{setRollno(e.target.value)}} className='form-control' type="text" id='rollno' placeholder='Enter Your Roll No'/>
        <label htmlFor="password">Password :</label>
        <input value={password} onChange={e=>{setPassword(e.target.value)}} className='form-control' type="text" id='password' placeholder='Password'/>
        <input type="submit" className='btn btn-dark' />
        <div className='d-flex'>
        <p>Not a registered User ?</p>
        <Link to="/signup">Sign Up</Link>
        </div>
        
      </form>
    </div>

   
  )
}
