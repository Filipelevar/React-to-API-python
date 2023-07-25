import React from "react";
import styled, { keyframes } from "styled-components";

const rotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

const SpanWrapper = styled.span`
  position: relative;
  color: #fff;
  font-weight: 900;
  font-size: 20.4em;
  display: block;
  overflow: hidden;
  width: fit-content;
  height: max-content;
  align-items: center;

  &:before {
    content: "";
    background-image: url("https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png");
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    animation: ${rotateIn} 0.5s ease-out;
  }
`;

const RotatingText = ({ children }) => {
  return <SpanWrapper>{children}</SpanWrapper>;
};

export default RotatingText;
