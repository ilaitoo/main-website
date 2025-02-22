"use client";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;

  @media (min-width: 768px) {
    padding: 0 50px;
  }
`;

export default function Center({ children }) {
  return (
    <>
      <StyledDiv className="">{children}</StyledDiv>
    </>
  );
}
