import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Post } from './Post';

export const Profile = (props) => {

    const [user,setUser]=useState('');
    // const [rollno,setRollno]=useState('');
    const [posts,setPosts]=useState([]);
    const [email,setEmail]=useState('');
    let {rollno}=useParams();
    const getuser=async()=>{
        const response=await fetch(`http://localhost:4000/user/${rollno}`,{
          method: 'GET',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'auth-token':localStorage.getItem('token')
          },
          
        })
        const json=await response.json();
        setUser(json.user.username)
        setEmail(json.user.email);
       
        setPosts(json.posts);
        
        
        // setRollno(json.user.rollno);
    }

    useEffect(()=>{
      getuser();
    },[])

    useEffect(()=>{
      getuser();
    },[posts])
  return (
    <>
    <div  style={{width:"45vw"}} className='mx-auto my-3'>

    <div className='d-flex align-items-center'>
      <h5>Name : </h5>
      <div className='m-3'>{user}</div>
      </div>
    <div className='d-flex align-items-center'>
      <h5>RollNo : </h5>
      <div className='m-3'>{rollno}</div>
      
      </div>
    <div className='d-flex align-items-center'>
      <h5>Email Address :</h5>
      <div className='m-3'>{email}</div>
      
      </div>
    </div>
    
    <div className='bg-dark text-white p-2 text-center'>
       <h5>POSTS</h5>
    </div>
    {posts.map((post)=>{
      return <Post key={post._id} id={post._id} title={post.title.slice(0,20)} content={post.content.slice(0,33)}/>

    })}
    </>
  )
}