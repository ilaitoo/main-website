"use client";
import styled, { css } from "styled-components";
export const buttonStyle = css`
  background-color: #ffffff;
  padding: 0 14px;
  height: 40px;
  border-radius: 8px;
  font-size: 0.8rem;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 3px rgba(0, 0, 0, 0.02);
  svg {
    height: 18px;
    margin-right: 5px;
  }
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.black &&
    css`
      background-color: #0a0a0a;
      box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.2);
      color: #ededed;
    `}
`;
const StyledButton = styled.button`
  ${buttonStyle}
`;
export default function Button({ children, ...rest }) {
  return (
    <>
      <StyledButton {...rest}>{children}</StyledButton>
    </>
  );
}
