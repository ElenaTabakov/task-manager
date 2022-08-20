import React from "react";
import DatePicker from "react-datepicker";
import { FormikHelpers, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { FormikTaskValues } from "./AddEditTaskForm";

const InputDate = ( ) => {

    const {values, setFieldValue} = useFormikContext<FormikTaskValues>();
console.log(values.date);
    // const [startDate, setStartDate] = useState(task ? task.date : new Date());

    return (
      
        <DatePicker selected={values.date} onChange={(date:Date) => setFieldValue('values.date' , date )} />
    )
}


export default InputDate;