import React from "react";

import { Link } from "react-router-dom";

import { Button } from "./style";

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
