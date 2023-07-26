import React from "react";
import { CheckIcon, ProductAddedMessage } from "./style";

const MessageCard = ({
  text,
  width,
  height,
  fontSize,
  fontSizeIcon,
  margin,
  ...props
}) => {
  return (
    <ProductAddedMessage
      width={width}
      height={height}
      fontSize={fontSize}
      margin={margin}
    >
      <p>{text}</p>
      <CheckIcon fontSizeIcon={fontSizeIcon} />
    </ProductAddedMessage>
  );
};

export default MessageCard;
