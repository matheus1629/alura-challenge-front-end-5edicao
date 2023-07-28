import React from "react";

import { Link } from "react-router-dom";
import StyledLink from "../../Link/style";

import { Button } from "./style";

const ButtonFill = ({ text, width, height, to, onClick, ...props }) => {
  return (
    <StyledLink to={to}>
      <Button onClick={onClick} width={width} height={height} {...props}>
        {text}
      </Button>
    </StyledLink>
  );
};

export default ButtonFill;
