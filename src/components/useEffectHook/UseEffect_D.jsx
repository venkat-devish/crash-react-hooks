import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect_D = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idRef, setIdRef] = useState(1);

  const data = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const postData = await res.data;
    setPost(postData);
  };

  useEffect(() => {
    data();
  }, [idRef]);

  const handleFetch = () => {
    setIdRef(id);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handleFetch}>Fetch Posts</button>
      <div>{post.title}</div>
    </div>
  );
};

export default UseEffect_D;
