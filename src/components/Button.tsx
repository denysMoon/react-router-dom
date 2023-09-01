import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/blog");
  };

  return <button onClick={clickHandler}>{text}</button>;
};
