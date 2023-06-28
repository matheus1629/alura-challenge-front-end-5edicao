import React from "react";
import { Button } from "./style";

const ButtonFill = ({ text, width, height }) => {
  return (
    <Button width={width} height={height}>
      {text}
    </Button>
  );
};

export default ButtonFill;
