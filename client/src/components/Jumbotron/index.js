import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "gray", height: "60px" }}
      className="jumbotron"
    >
      <h1>Google Books Search App</h1>
    </div>
  );
}

export default Jumbotron;