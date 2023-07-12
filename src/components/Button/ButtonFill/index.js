import React from "react";
import { Button } from "./style";
import { Link } from "react-router-dom";

const ButtonFill = ({ text, width, height, to, onClick }) => {
  return (
    <Link to={to}>
      <Button onClick={onClick} width={width} height={height}>
        {text}
      </Button>
    </Link>
  );
};

export default ButtonFill;
