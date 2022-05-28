import styled from "styled-components";

export const InputWrapper = styled.div`
  max-width: 350px;
  padding: 25px;
  border: 1px solid #000;
`;

export const Input = styled.input<{ error: boolean }>`
  border-color: ${({ error }) => (error ? "red" : "black")};
  margin-bottom: ${({ error }) => (error ? "0px" : "15px")};
  border-radius: 10px;
  border-width: 1px;
  padding: 10px 15px;

  &:active,
  &:focus {
    border-width: 2px;
    border-color: lightblue;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
`;
