import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom';



export const Newpost = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const Navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/create", {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({
        title,
        tags,
        content
      })
    })

    const json = await response.json();



    if (json.success) {

      Navigate(`/home/post/${json.newPost._id}`);
      console.log("Account created successfully", "success")
    }
    else {
      alert("Failed")
    }
  }
  const checkLogin=()=>{
    if(!localStorage.getItem('token')){
      Navigate('/login');
      return;
    }
  }

  useEffect(()=>{
    checkLogin();
  },[])

  return (
    <form onSubmit={handleSubmit} className='m-2'>
      <label htmlFor="title">Title :</label>
      <input value={title} onChange={e => { setTitle(e.target.value) }} className=' m-2 form-control' id='title' type="text" placeholder='Enter Title' />
      <label htmlFor="tags">Tags :</label>
      <input value={tags} onChange={e => { setTags(e.target.value) }} className=' m-2 form-control' id='tags' type="text" placeholder='Enter tags in comma seperated values' />
      <div className='m-2'>

        <ReactQuill value={content} onChange={e => { setContent(e) }} />
      </div>
      <input type="submit" className='btn btn-primary' />
    </form>
  )
}
