import styled, { css } from "styled-components";
export const Button = styled.button`
  background-color: #171717;
  color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: none;
  margin: 3px;
  font-size: 14px;
  ${props =>
    props.value === "0" &&
    css`
      width: 105px;
    `}
    ${props =>
      ["/", "+", "-", "*", "="].includes(props.value) &&
      css`
        background-color: #e48800;
      `}
      ${props =>
        ["c", "%", "Del"].includes(props.value) &&
        css`
          background-color: #9e9e9e;
          color: black;
        `}
  
`;
