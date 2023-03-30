import React, { useEffect, useState } from "react";
import { Post } from "./Post";

export const Newsfeed = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

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
      <div className="d-flex justify-content-center">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="form-control w-50 my-5"
        />
        <button onClick={handleClick} className="btn btn-success my-5 mx-3">
          Search
        </button>
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
