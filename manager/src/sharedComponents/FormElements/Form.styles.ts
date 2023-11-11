import styled from "styled-components";
import { Textarea } from "@mantine/core";
import { Formik } from "formik";
import { DateTimePicker } from "@mantine/dates";

export const Form = styled.form`
  padding: 25px;
  margin: 0 -1rem;
  display: flex;
  flex-wrap: wrap;
  &.search_form {
    margin-left: 0;
  }
  &.login_form,
  &.register_form {
    max-width: 500px;
    padding-inline: 0;
  }
  & input {
    margin-top: 5px;
  }
`;

export const HalfWrapper = styled.div`
  width: 50%;
  padding: 0 1rem;
  box-sizing: border-box;
  flex: 0 0 50%;
`;
export const FullWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  flex: 0 0 100%;
`;

export const FormWrapper = styled.div`
  border: 1px solid lightseagreen;
  border-radius: 5px;
  margin: 10px 0;
  flex: 0 0 100%;
`;

export const TextArea = styled(Textarea)`
  & textarea {
    border-radius: 10px;
    border-width: 1px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.toggleBorder};

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

export const DatePickerS = styled(DateTimePicker)`
  & label {
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-size: 1em;
  }
  & button {
    border-radius: 10px;
    border-width: 1px;
    width: 100%;
    box-sizing: border-box;
    padding: 6px 10px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.toggleBorder};

    &:active,
    &:focus {
      border-width: 2px;
      border-color: ${({ theme }) => theme.toggleBorder};
      background-color: ${({ theme }) => theme.body};
    }
  }
`;
