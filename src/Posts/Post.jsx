import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
const Post = () => {
  // const { id } = useParams();
  // console.log(result);

  const [post, setPost] = useState(null);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/?_delay=3000`
      );
      // 5ally Balk mn await Yastaaaa
      const date = await res.json();
      setLoading(false);
      setPost(date);
    };
    if (id !== "") {
      fetchPost();
    }

    // id changes => kol ma yet8yer ye fetch tany 34an kda han7t Id in []
  }, [id]);

  return (
    <>
      <div className="container">
        <h1>Post </h1>
        <div>
          <label htmlFor="id"> Posts ID</label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            name="id"
            id="id"
          />
        </div>
        <div>{id && loading && "Loading..... Please Wait"}</div>
        <div>{!loading && post && JSON.stringify(post)}</div>
      </div>
    </>
  );
};

export default Post;
