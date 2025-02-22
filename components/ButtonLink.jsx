import Link from "next/link";
import styled, { css } from "styled-components";
import { buttonStyle } from "./Button";

const StyledLink = styled(Link)`
  text-decoration: none;
  ${buttonStyle}
`;

export default function ButtonLink(props) {
  return (
    <>
      <StyledLink {...props}></StyledLink>
    </>
  );
}
