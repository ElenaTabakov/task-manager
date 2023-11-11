import { useFormikContext } from "formik";
import { FormikTaskValues } from "../../components/AddEditTaskForm/AddEditTaskForm.types";
import { DatePicker, DateTimePicker } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons";
import { DatePickerS } from "./Form.styles";

const InputDate = () => {
  const { values, setFieldValue } = useFormikContext<FormikTaskValues>();

  return (


    <DatePickerS
      placeholder="Pick date"
      dropdownType="modal"
      label="Event date"
      // withAsterisk
      defaultValue={values.dueDate}
      onChange={(date: Date) => setFieldValue("dueDate", date)}
      // icon={<IconCalendar size={16} />}
    />
  );
};

export default InputDate;
