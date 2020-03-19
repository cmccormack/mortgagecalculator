import React, { FC, HTMLProps } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import { theme } from "../../theme";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledLink = styled.a`
  text-decoration: inherit;
  color: inherit;

  &:visited {
    text-decoration: inherit;
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header color="#333">{"Mack's Mortgage Calculator"}</Header>
      <Main />
      <Footer color="333">
        <StyledLink
          href="https://mack.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"© Copyright 2020 Christopher McCormack"}
        </StyledLink>
      </Footer>
    </ThemeProvider>
  );
};
