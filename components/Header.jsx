"use client";
import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { GlobalStyle } from "./GlobalStyleWrapper";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const StyledHeader = styled.header`
  background-color: #000;
  border-bottom: solid 1px #333;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const NavLinks = styled(Link)`
  color: #888888;
  text-decoration: none;
  margin-bottom: 25px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 60px;
  right: ${(props) => (props.show === "false" ? "-300px" : "0")};
  transition: right 0.3s ease-in-out;
  width: 300px;
  height: 100vh;
  background-color: black;
  box-shadow: 0 40px 60px rgba(0 0 0 0.1);
  padding: 40px 0 0 20px;

  @media (min-width: 768px) {
    padding: 0;
    width: fit-content;
    height: 0;
    flex-direction: row;
    position: static;
    display: flex;
    gap: 20px;
  }
`;

const NavBtn = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
  svg {
    width: 30px;
    color: #fff;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  background-color: black;
  position: absolute;
  transition: 0.3s;
  /* transform: ${(props) =>
    props.show === "false" ? "translateX(-100%)" : "translateX(0)"}; */
  top: 60px;
  width: 90%;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 100px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled(Link)`
  color: #888888;
  text-decoration: none;
  padding: 10px 0;
  text-align: center;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [showNav, setShowNav] = useState(false);
  // useEffect(() => {
  //   if (showNav) {
  //     document.body.style.position = "fixed"; // Prevents bounce-back effect on mobile
  //     document.body.style.width = "100%";
  //     return () => {
  //       document.body.style.position = ""; // Restore default styles
  //       document.body.style.width = "";
  //     };
  //   }
  // }, [showNav]);
  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <Center>
          <Wrapper>
            <Logo href={"/"}>Ecommerce</Logo>

            <Nav show={showNav.toString()}>
              <NavLinks href={"/"}>Home</NavLinks>
              <NavLinks href={"/products"}>All products</NavLinks>
              <NavLinks href={"/categories"}>Categories</NavLinks>
              <NavLinks href={"/account"}>Account</NavLinks>
              <NavLinks href={"/cart"}>Cart ({cartProducts?.length})</NavLinks>
            </Nav>

            <NavBtn onClick={() => setShowNav((prev) => !prev)}>
              {showNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </NavBtn>
          </Wrapper>
        </Center>
      </StyledHeader>
    </>
  );
}
