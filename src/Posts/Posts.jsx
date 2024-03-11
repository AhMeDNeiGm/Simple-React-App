import React from "react";
import { useLoaderData } from "react-router-dom";

export async function PostsLoading() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const Posts = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((p) => (
          <li key={p.id}>{p.title} </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
