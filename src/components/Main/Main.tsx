import React, { FC, HTMLProps } from "react";
import styled from "styled-components";
import InputsForm from "../InputsForm";

export const Main: FC<HTMLProps<HTMLDivElement>> = ({ className }) => (
  <main className={className}>
    <InputsForm />
  </main>
);

export const StyledMain = styled(Main)`
  display: flex;
  overflow-y: scroll;
  flex: auto;
  padding: 0.5rem;
`;
