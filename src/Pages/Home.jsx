import React from "react";
import { useLocation } from "react-router-dom";
const Home = () => {
  const Location = useLocation();

  return (
    <>
      <div className="container">
        {" "}
        <h1>Home Component</h1>
        <h1>Data: {Location.state}</h1>
      </div>
    </>
  );
};

export default Home;
