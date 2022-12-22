import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  isLoading: false,
  post: {},
  error: null,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS_START":
      return {
        isLoading: true,
        post: {},
        error: "",
      };
    case "FETCH_POSTS_COMPLETE":
      return {
        isLoading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_POSTS_ERROR":
      return {
        isLoading: false,
        post: {},
        error: "",
      };
    default:
      return state;
  }
};

const DataFetchingReprise = () => {
  const [postsState, dispatchPosts] = useReducer(postReducer, initialState);

  const posts = async () => {
    dispatchPosts({ type: "FETCH_POSTS_START" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      dispatchPosts({ type: "FETCH_POSTS_COMPLETE", payload: response.data });
    } catch (error) {
      dispatchPosts({ type: "FETCH_POSTS_ERROR" });
    }
  };
  useEffect(() => {
    posts();
  }, []);

  return (
    <div>
      {postsState.isLoading ? "Loading..." : ""}
      {!postsState.isLoading && postsState.post.title}
    </div>
  );
};

export default DataFetchingReprise;
