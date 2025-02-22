"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", serif;
  background-color: #f0f0f0;

}
`;
export default function GlobalStyleWrapper() {
  return <GlobalStyle />;
}
