import styled, { css } from "styled-components";
export const Span = styled.span`
  position: absolute;
  top: 50px;
  right: 10px;
  color: white;

  font-size: 40px;
  ${props =>
    props.value === "Malformed expression" &&
    css`
      font-size: 20px;
    `}
`;
