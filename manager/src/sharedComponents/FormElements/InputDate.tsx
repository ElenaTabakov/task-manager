import { useFormikContext } from "formik";
import { FormikTaskValues } from "../../components/AddEditTaskForm/AddEditTaskForm.types";
import { DatePicker } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons";

const InputDate = () => {
  const { values, setFieldValue } = useFormikContext<FormikTaskValues>();

  return (
    <DatePicker
      placeholder="Pick date"
      // label="Event date"
      // withAsterisk
      defaultValue={values.dueDate}
      onChange={(date: Date) => setFieldValue("dueDate", date)}
      // icon={<IconCalendar size={16} />}
    />
  );
};

export default InputDate;
