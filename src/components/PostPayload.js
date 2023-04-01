import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import parse from 'html-react-parser'

export const PostPayload = (props) => {
  let { postid } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [tags, setTags] = useState([]);
  const [createdAt, setCreatedAt] = useState('');
  const [rollno, setRollno] = useState('');
  
  const getPost = async () => {
    const response = await fetch(`http://localhost:4000/post/${postid}`, {
      method: 'GET',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    })
    const json = await response.json();
    setTitle(json.title);
    setContent(parse(json.content));
    setRollno(json.rollno);
    setCreatedAt(json.createdAt);
    setTags(json.tags);
    setUsername(json.username);
  }
  useEffect(() => {
    getPost();
  }, [])
  return (
    <>
      <h2>{title}</h2>
      <p>written by {username} <Link to={`/home/user/${rollno}`}>{rollno}</Link> at {createdAt} </p>
      <p>Tags : {tags}</p>

      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem nihil labore quia sed repellendus odio tenetur commodi animi atque nobis neque laudantium, accusantium quo. Recusandae, eum aliquam tempora dolorum aut aspernatur fugit corrupti facilis, assumenda provident quisquam expedita quia non at tenetur et veritatis adipisci optio minus perspiciatis temporibus facere mollitia nobis vero! Beatae iusto quisquam autem provident assumenda nihil dolor magnam repudiandae ut mollitia illo error unde distinctio atque maxime aperiam dolorem aliquid cum vero repellendus ad, minus maiores. Nam placeat esse expedita totam, similique in suscipit quas eos officiis fugiat ab tenetur unde accusantium, dolores, ipsa velit?</p> */}
      <p>{content}</p>
    </>
  )
}
