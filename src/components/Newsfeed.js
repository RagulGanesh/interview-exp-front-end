import React, { useEffect, useState } from 'react'
import { Post } from './Post';


export const Newsfeed = () => {
    const [posts,setPosts]=useState([]);
    const getposts=async()=>{
        const response=await fetch(`http://localhost:4000/getAllPosts`,{
          method: 'GET',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'auth-token':localStorage.getItem('token')
          },
          
        })
        const json=await response.json();
        
       
        setPosts(json.posts);

        
        
        
        // setRollno(json.user.rollno);
    }

    useEffect(()=>{
        getposts();
      },[])
  
      useEffect(()=>{
        getposts();
      },[posts])

  return (
    <>
    
    {posts.map((post)=>{
        return <Post key={post._id} id={post._id} title={post.title.slice(0,20)} content={post.content.slice(0,33)}/>
  
      })}
    </>
  )
}
