import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../static/Signup.css"
import "../static/utils.css"

export const Signup = () => {
    const [username,setUsername]=useState('');
    const [rollno,setRollno]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [validate,setValidate]=useState('');
    const Navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(password.length<8){
          setValidate('Password should contain atleast 8 characters');
          return;
        }
        // if(!email.match("^[a-zA-Z0-9]*@cbit\.org\.in$")){
        //   setValidate("Enter correct email");
        //   return;
        // }

        const response=await fetch("http://localhost:4000/register",{
          method: 'POST',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type' : 'application/json',
          },
          body : JSON.stringify({
            rollno,
            username,
            email,
            password
          })
        })

        const json=await response.json();
        
        
         
          if(json.success){
            localStorage.setItem('token',json.authtoken)
           Navigate('/home');
            console.log("Account created successfully","success")
          }
          else{
            alert("Failed")
          }

       
    }
  return (
    <div className='cont mt-5 d-flex flex-column bg_col justify-content-center container border p-3 border-2'>
      <h1 className='text-center'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column gap-3 justify-content-between'>
        <label htmlFor="name">User Name :</label>
        <input value={username} onChange={e=>{setUsername(e.target.value)}} type="text" id='name' className='form-control' placeholder='Enter your name' />
        <label htmlFor="rollno">Roll No :</label>
        <input value={rollno} onChange={e=>{setRollno(e.target.value)}} className='form-control' type="text" id='rollno' placeholder='Enter Your Roll No'/>
        <label htmlFor="email">Email :</label>
        <input value={email} onChange={e=>{setEmail(e.target.value)}} className='form-control' type="text" id='email' placeholder='Enter Your Email'/>
        <label htmlFor="password">Password :</label>
        <input value={password} onChange={e=>{setPassword(e.target.value)}} className='form-control' type="password" id='password' placeholder='Password'/>
        {validate !== ''&&<div>{validate}</div>}
        <input  type="submit" className='btn btn-dark w-50 mx-auto' />
        
      </form>
    </div>
  )
}
