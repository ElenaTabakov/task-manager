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
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import {
  fetchTasksByUserId,
  createTasks,
  updateTasks,
  deleteTasks,
} from "../../store/slices/tasksSlice";
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

export interface FormikTaskValues {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  dueDate: Date;
  duration: number;
  status: string;
}

interface FormProps {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: boolean;
  isEdit: boolean;
  task?: Task;
  dateValue: Date;
}

const AddEditForm = ({ setIsShow, isShow, isEdit = false, task , dateValue}: FormProps) => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();

  const handleAddItem = (
    values: FormikTaskValues,
    helpers: FormikHelpers<FormikTaskValues>
  ) => {
    // e.preventDefault();
    dispatch(
      createTasks({
        id: "",
        title: values.title,
        description: values.description,
        shortDescription: values.shortDescription,
        dueDate: values.dueDate,
        duration: values.duration,
        status: "UPCOMING",
        date: dateValue
      })
    );
    setIsShow(false);
    helpers.resetForm();
    // setInputValue({ title: "", description: "" });
  };

  const editTaskHandler = (values: FormikTaskValues) => {
    if (tasks && task) {
      dispatch(
        updateTasks({
          id: values.id,
          title: values.title,
          description: values.description,
          shortDescription: values.shortDescription,
          dueDate: values.dueDate,
          duration: values.duration,
          status: "UPCOMING",
          date: dateValue
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
    };
  };

  const validationSchema = yup.object().shape({
    id: yup.string(),
    title: yup.string().required("Requred").min(3, "Too short"),
    description: yup.string().required("Requred").min(3, "Too short"),
    shortDescription: yup.string().required("Requred").min(3, "Too short"),
    duration: yup.number().min(15, "Duration must be at least 15 minutes"),
    dueDate: yup.date(),
  });

  return (
    <Formik
      initialValues={initialValuesTask(task)}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={
        isEdit ? editTaskHandler : handleAddItem 
      }
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
