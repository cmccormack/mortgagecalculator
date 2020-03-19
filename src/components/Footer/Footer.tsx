import React, { FC, HTMLProps } from "react";
import styled from "styled-components";

export const Footer: FC<HTMLProps<HTMLElement>> = ({ children, className }) => (
  <footer className={className} id="footer">
    {children}
  </footer>
);

export const StyledFooter = styled(Footer)`
  background-color: ${({ theme }): string => theme.colors.main || "black"};
  color: ${({ theme }): string => theme.colors.secondary || "white"};
  padding: ${({ theme }): string => theme.padding || "inherit"};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
