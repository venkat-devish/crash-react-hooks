import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const DataFetching = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const posts = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const res = await data.data;
      setLoadedPosts(res.title);
      setIsLoading(false);
    } catch (error) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    posts();
  }, []);

  return (
    <div>
      {isLoading && "Loading..."}
      {!isLoading && <h2>{loadedPosts}</h2>}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default DataFetching;
