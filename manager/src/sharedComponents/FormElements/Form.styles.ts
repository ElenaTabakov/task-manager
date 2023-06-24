import styled from "styled-components";
import { Textarea } from "@mantine/core";

export const Form = styled.form`
  padding: 25px;
  &.search_form {
    margin-left: 0;
  }
`;

export const FormWrapper = styled.div`
  border: 1px solid lightseagreen;
  border-radius: 5px;
  margin: 10px 0;
  flex: 0 0 100%;
`;

export const TextArea = styled(Textarea)`
 & textarea{
  border-radius: 10px;
  border-width: 1px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.body};
  border-color:${({theme}) => theme.toggleBorder};

  &:active,
  &:focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.toggleBorder};
    background-color: ${({ theme }) => theme.body};
  }
 }

 & label {
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-size: 1rem;
 }
  
`;
