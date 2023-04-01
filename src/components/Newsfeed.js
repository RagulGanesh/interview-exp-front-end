import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import "../static/utils.css"
import "../static/Newfeed.css"
import { useNavigate } from "react-router-dom";


export const Newsfeed = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        search,
      }),
    });

    const json = await response.json();
    setPosts(json.posts);
  };

  const getposts = async () => {
    if(!localStorage.getItem('token')){
      Navigate('/login');
      return ;
    }
    const response = await fetch(`http://localhost:4000/getAllPosts`, {
      method: "GET",
      headers: {
        // 'Accept': 'application/json',
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();

    setPosts(json.posts);

    // setRollno(json.user.rollno);
  };

  useEffect(() => {
    getposts();
  }, []);

  // useEffect(()=>{
  //   getposts();
  // },[posts])

  return (
    <>
      <div className="search">
        <input value={search} onChange={(e) => {
          setSearch(e.target.value);
        }} type="text" placeholder="Search.." name="search" />
        <button onClick={handleClick} type="submit"><i class="fa fa-search"></i></button>
        {/* <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="form-control w-50 my-5"
        /> */}
        {/* <button onClick={handleClick} type="submit" className="btn_search"><i class="fa fa-search"></i></button> */}
        {/* <button className='btn btn-danger my-5'>Filter</button> */}
      </div>

      <div>
        <div>
          {posts.map((post) => {
            return (
              <Post
                key={post._id}
                id={post._id}
                title={post.title.slice(0, 20)}
                content={post.content.slice(0, 33)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
