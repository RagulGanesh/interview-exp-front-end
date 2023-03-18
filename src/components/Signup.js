import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [username,setUsername]=useState('');
    const [rollno,setRollno]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const Navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
    axios
      .post("https://4000/register", { rollno,username,email,password })
      .then(response => {
        console.log(response)
        // Handle response
      })
      Navigate('/home');
    }
  return (
    <div className='mt-5 d-flex flex-column  justify-content-center container w-50 border border-dark p-3 border-2 rounded'>
      <h1 className='text-center'>Sign Up</h1>
      <form className='d-flex flex-column gap-3 justify-content-between'>
        <label htmlFor="name">User Name :</label>
        <input value={username} onChange={e=>{setUsername(e.target.value)}} type="text" id='name' className='form-control' placeholder='Enter your name' />
        <label htmlFor="rollno">Roll No :</label>
        <input value={rollno} onChange={e=>{setRollno(e.target.value)}} className='form-control' type="text" id='rollno' placeholder='Enter Your Roll No'/>
        <label htmlFor="email">Email :</label>
        <input value={email} onChange={e=>{setEmail(e.target.value)}} className='form-control' type="text" id='rollno' placeholder='Enter Your Email'/>
        <label htmlFor="password">Password :</label>
        <input value={password} onChange={e=>{setPassword(e.target.value)}} className='form-control' type="text" id='password' placeholder='Password'/>
        <input onClick={handleSubmit} type="submit" className='btn btn-dark' />
        
      </form>
    </div>
  )
}
