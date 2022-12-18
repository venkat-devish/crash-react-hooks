import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect_C = () => {
  const [posts, setPosts] = useState([]);

  const data = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const post = await res.data;
    setPosts(post);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.userId}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect_C;
