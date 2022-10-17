import React from "react";
import DatePicker from "react-datepicker";
import { FormikHelpers, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { FormikTaskValues } from "./AddEditTaskForm";

const InputDate = () => {
  const { values, setFieldValue } = useFormikContext<FormikTaskValues>();
  // console.log(values.dueDate);
  // const [startDate, setStartDate] = useState(task ? task.date : new Date());

  return (
    <DatePicker
      selected={values.dueDate}
      onChange={(date: Date) => setFieldValue("date", date)}
    />
  );
};

export default InputDate;
