import React from "react";
import { Button } from "./style";
import { Link } from "react-router-dom";

const ButtonFill = ({ text, width, height, to, onClick, ...props }) => {
  return (
    <Link to={to}>
      <Button onClick={onClick} width={width} height={height} {...props}>
        {text}
      </Button>
    </Link>
  );
};

export default ButtonFill;
