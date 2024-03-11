import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const Navigate = useNavigate();
  const HandleClick = () => {
    Navigate("/", { state: "Come From State Mn About" });
  };
  return (
    <>
      <div className="container">
        <h1>About</h1>
        <button onClick={HandleClick} className="btn btn-outline-dark">
          Go To Home
        </button>
      </div>
    </>
  );
};

export default About;
