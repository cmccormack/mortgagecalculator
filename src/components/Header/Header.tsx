import React, { FC, HTMLProps } from "react";
import styled from "styled-components";

export const Header: FC<HTMLProps<HTMLElement>> = ({ children, className }) => (
  <header id="header" className={className}>
    {children}
  </header>
);

export const StyledHeader = styled(Header)`
  background-color: ${({ theme }): string => theme.colors.main || "black"};
  color: ${({ theme }): string => theme.colors.secondary || "white"};
  padding: ${({ theme }): string => theme.padding || "inherit"};
  display: flex;
  align-items: center;
`;
