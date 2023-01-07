import React from "react";
import DatePicker from "react-datepicker";
import { useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { FormikTaskValues } from "./AddEditTaskForm";

const InputDate = () => {
  const { values, setFieldValue } = useFormikContext<FormikTaskValues>();

  return (
    <DatePicker
      selected={values.dueDate}
      onChange={(date: Date) => setFieldValue("dueDate", date)}
    />
  );
};

export default InputDate;
