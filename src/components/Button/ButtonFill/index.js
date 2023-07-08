import React from "react";
import { Button } from "./style";
import { Link } from "react-router-dom";

const ButtonFill = ({ text, width, height, to }) => {
  return (
    <Link to={to}>
      <Button width={width} height={height}>
        {text}
      </Button>
    </Link>
  );
};

export default ButtonFill;
