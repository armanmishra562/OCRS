import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <h1>404</h1>
            <p>Page Not Found</p>
            <NavLink to="/">Back To Homepage</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
