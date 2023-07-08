import React from "react";
import { Button } from "./style";
import StyledLink from "../../Link/style";
const ButtonOutline = ({ text, width, height, to }) => {
  return (
    <StyledLink to={to}>
      <Button width={width} height={height}>
        {text}
      </Button>
    </StyledLink>
  );
};

export default ButtonOutline;
