import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default (props) => <StyledLink {...props} />;
