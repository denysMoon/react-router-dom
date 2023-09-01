import React from "react";
import { ROUTES } from "../constants";
import { CustomLink } from "./CustomLink";

export const Header: React.FC = () => {
  return (
    <div className="navBar">
      <div className="linksWrapper">
        {ROUTES.map((route) => {
          return (
            <CustomLink key={route.path} to={route.path}>
              {route.name}
            </CustomLink>
          );
        })}
      </div>
    </div>
  );
};
