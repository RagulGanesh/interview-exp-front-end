import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [user,setUser]=useState('');
    const Navigate=useNavigate();

    const handleClick=()=>{
      Navigate('/home/createpost');
    }

    const getuser=async()=>{
        const response=await fetch("http://localhost:4000/getuser",{
          method: 'POST',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'auth-token':localStorage.getItem('token')
          },
          
        })
        const json=await response.json();
        setUser(json.username)
    }
    useEffect(()=>{
        getuser();
    },[])
    const handleLogout=()=>{
        localStorage.removeItem('token')
        Navigate("/login")
    }
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{user}</a>
        </li>
        
        
      </ul>
      <button onClick={handleClick} className='btn btn-primary'>Create Post</button>
    </div>
    <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
  </div>
</nav>
  )
}
