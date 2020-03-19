import React, { FC, HTMLProps } from "react";
import styled from "styled-components";

export const Main: FC<HTMLProps<HTMLDivElement>> = ({ className }) => (
  <main className={className}>Main</main>
);

export const StyledMain = styled(Main)`
  display: flex;
  overflow-y: scroll;
  flex: auto;
  padding: 0.5rem;
`;
