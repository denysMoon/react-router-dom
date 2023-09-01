import React from "react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="navBar">
      <div className="linksWrapper">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};
