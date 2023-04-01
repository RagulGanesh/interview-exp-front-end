import React from 'react'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import "../static/utils.css"
import "../static/Post.css"
import { Link } from 'react-router-dom'

export const Post = (props) => {
  const Navigate = useNavigate();
  const handleClick=()=>{
    Navigate(`/home/post/${props.id}`)
  }
  return (
    <>
    <div className="container">
    <div className='cont bg_col post_cont'>
        <h6>{props.title}</h6>
        <p>{parse(props.content)}</p>
        <div className="read"><button onClick={handleClick} className='btns_link'>Read More</button></div>
        {/* <Link onClick={handleClick}>Read More</Link> */}
    </div>
    </div>
    </>
  )
}
