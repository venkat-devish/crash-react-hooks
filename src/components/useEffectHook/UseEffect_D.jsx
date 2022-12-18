import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect_D = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState("1");

  const data = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await res.data;
    setPost(post);
  };

  useEffect(() => {
    data();
  }, [id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <h4>{post.title}</h4>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.userId}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default UseEffect_D;
