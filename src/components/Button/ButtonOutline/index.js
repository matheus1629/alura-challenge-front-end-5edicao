import React from "react";

import { Button } from "./style";

import StyledLink from "../../Link/style";

const ButtonOutline = ({ text, width, height, to, onClick, ...props }) => {
  return (
    <StyledLink to={to}>
      <Button onClick={onClick} width={width} height={height} {...props}>
        {text}
      </Button>
    </StyledLink>
  );
};

export default ButtonOutline;
