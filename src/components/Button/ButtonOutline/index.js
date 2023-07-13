import React from "react";
import { Button } from "./style";
import StyledLink from "../../Link/style";

const ButtonOutline = ({ text, width, height, to, onClick }) => {
  return (
    <StyledLink to={to}>
      <Button onClick={onClick} width={width} height={height}>
        {text}
      </Button>
    </StyledLink>
  );
};

export default ButtonOutline;
