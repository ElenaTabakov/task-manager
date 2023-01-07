import styled from "styled-components";

export const InputWrapper = styled.div`
  max-width: 350px;
  padding: 25px;
  border: 1px solid #000;
`;

export const Input = styled.input`
  border-radius: 10px;
  border-width: 1px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.body};

  &:active,
  &:focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.toggleBorder};
    background-color: ${({ theme }) => theme.body};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
`;
