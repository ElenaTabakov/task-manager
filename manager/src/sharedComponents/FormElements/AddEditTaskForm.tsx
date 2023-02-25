import React, { ChangeEvent, useState } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./Form.styled";
import Input from "./Input/Input";
import { Task } from "../../screens/Tasks/Tasks";
import ModalWindow from "../ModalWindow/ModalWindow";
// import { addTask, editTask } from "../../store/slices/tasksSlice";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../hooks/use-auth";
import InputDate from "./InputDate";
import { Field, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import {
  fetchTasksByUserId,
  createTasks,
  updateTasks,
  deleteTasks,
} from "../../store/slices/tasksSlice";
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Radio } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons";
import { fullDateISO } from "../../store/utils";

export interface FormikTaskValues {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  dueDate: Date;
  duration: number;
  status: string;
  dueTime: Date;
}

interface FormProps {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: boolean;
  isEdit: boolean;
  task?: Task;
  dateValue: Date;
  status: string;
}

const AddEditForm = ({
  setIsShow,
  isShow,
  isEdit = false,
  task,
  dateValue,
  status,
}: FormProps) => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const [valueStatus, setValueStatus] = useState(status);
  const [valueTime, setValueTime] = useState(dateValue);

  const handleAddItem = (
    values: FormikTaskValues,
    helpers: FormikHelpers<FormikTaskValues>
  ) => {
    console.log(values.dueDate, "formik dueDate");
    console.log(valueTime, "Add Item date");
    const fullDate = fullDateISO(values.dueDate, valueTime);
    dispatch(
      createTasks({
        id: "",
        title: values.title,
        description: values.description,
        shortDescription: values.shortDescription,
        dueDate: fullDate,
        duration: values.duration,
        status: "UPCOMING",
        date: dateValue,
        // fullDate: fullDate,
      })
    );
    setIsShow(false);
    helpers.resetForm();
  };

  const editTaskHandler = (values: FormikTaskValues) => {
    if (tasks && task) {
      // console.log(values.dueDate, "date before send axios");
      const fullDate = fullDateISO(values.dueDate, valueTime);
      dispatch(
        updateTasks({
          id: values.id,
          title: values.title,
          description: values.description,
          shortDescription: values.shortDescription,
          dueDate: fullDate,
          duration: values.duration,
          // status: "UPCOMING",
          status: valueStatus,
          date: dateValue,
          // fullDate: fullDate,
        })
      );
      setIsShow(false);
    }

    return task;
  };

  const initialValuesTask = (task?: Task) => {
    if (task) {
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        shortDescription: task.shortDescription,
        dueDate: new Date(task.dueDate),
        duration: task.duration,
        status: task.status,
        dueTime: new Date(task.dueDate),
      };
    }
    return {
      id: "",
      title: "",
      description: "",
      shortDescription: "",
      dueDate: dateValue,
      duration: 15,
      status: "",
      dueTime: dateValue,
    };
  };

  const validationSchema = yup.object().shape({
    id: yup.string(),
    title: yup.string().required("Requred").min(3, "Too short"),
    description: yup.string().required("Requred").min(3, "Too short"),
    shortDescription: yup.string().required("Requred").min(3, "Too short"),
    duration: yup.number().min(15, "Duration must be at least 15 minutes"),
    dueDate: yup.date(),
    status: yup.string(),
  });

  return (
    <Formik
      initialValues={initialValuesTask(task)}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={isEdit ? editTaskHandler : handleAddItem}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        isValid,
        dirty,
      }) => (
        <ModalWindow
          title={isEdit ? "Edit Task" : "Add New Task"}
          visible={isShow}
          setIsShow={setIsShow}
          cancelBtnText="Cancel"
          confirmBtnText={isEdit ? "Edit" : "Add"}
          onSubmit={handleSubmit}
          disabled={!values.title || !values.description}
        >
          <S.Form>
            <Input
              label="Task Title"
              type="text"
              name="title"
              placeholder="Task Title"
            />
            <Input
              label="Task Description"
              type="text"
              name="description"
              placeholder="Task Description"
            />
            <Input
              label="Short Description"
              type="text"
              name="shortDescription"
              placeholder="Short Description"
            />
            <Input
              label="Duration"
              type="number"
              name="duration"
              placeholder="Duration"
            />
            <InputDate />
            {isEdit && (
              <Radio.Group
                name="status"
                label="Task Status"
                id="status"
                value={valueStatus}
                onChange={setValueStatus}
                description="Select task status"
                withAsterisk
              >
                <Radio value="DONE" name="status" label="DONE" />
                <Radio value="UPCOMING" name="status" label="UPCOMING" />
                <Radio value="CANCELED" name="status" label="CANCELED" />
              </Radio.Group>
            )}
            <TimeInput
              icon={<IconClock size={16} />}
              defaultValue={values.dueDate}
              value={valueTime}
              onChange={setValueTime}
              label="Event time"
            />
          </S.Form>
        </ModalWindow>
      )}
    </Formik>
  );
};

export default AddEditForm;
function submitForm(values: FormikTaskValues, submitForm: any) {
  throw new Error("Function not implemented.");
}
