import React from 'react'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'

export const Post = (props) => {
  const Navigate = useNavigate();
  const handleClick=()=>{
    Navigate(`/home/post/${props.id}`)
  }
  return (
    <div className='border border-dark m-2 p-2 rounded-2'>
        <h6>{props.title}</h6>
        <p>{parse(props.content)}</p>
        <button onClick={handleClick} className='btn btn-primary'>Read More</button>
    </div>
  )
}
