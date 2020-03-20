import React, { FC, HTMLProps } from "react";
import styled from "styled-components";

interface FormInputs {
  initialValue: number;
  interestRate: number;
  termInYears: number;
  paymentsPerYear: number;
  downPayment: number;
  additionalPrincipal: number;
}

export const FormRowTitle: FC = ({ children }) => (
  <div className="form-row-title">{children}</div>
);

export const FormRowInput: FC<{ property: string }> = ({ property }) => (
  <input name={property} />
);

const formInputTitles = [
  { property: "initialValue:", title: "Initial Value", type: "number" },
  { property: "interestRate:", title: "Interest Rate", type: "number" },
  { property: "termInYears:", title: "Term (years)", type: "number" },
  { property: "paymentsPerYear:", title: "Payments per year", type: "number" },
  { property: "downPayment:", title: "Down Payment", type: "number" },
  {
    property: "additionalPrincipal:",
    title: "Additional Principal",
    type: "number",
  },
];

export const FormRow: FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return <div className={className + " form-row"}>{children}</div>;
};

export const StyledFormRow = styled(FormRow)`
  display: flex;
  flex-direction: row;
`;

export const InputsForm: FC = () => {
  return (
    <div id="inputs-form">
      {formInputTitles.map(title => (
        <StyledFormRow>
          <FormRowTitle>{title.title}</FormRowTitle>
          <FormRowInput property={title.property}></FormRowInput>
        </StyledFormRow>
      ))}
    </div>
  );
};
