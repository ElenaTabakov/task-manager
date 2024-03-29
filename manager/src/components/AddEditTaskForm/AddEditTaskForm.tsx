import React, { useContext, useState } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import * as S from "../../sharedComponents/FormElements/Form.styles";
import Input from "../../sharedComponents/FormElements/Input/Input";
import ModalWindow from "../../sharedComponents/ModalWindow/ModalWindow";
import "react-datepicker/dist/react-datepicker.css";
import InputDate from "../../sharedComponents/FormElements/InputDate";
import { Formik, FormikHelpers } from "formik";
import { createTasks, updateTasks } from "../../store/slices/tasksSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Radio } from "@mantine/core";
import { Task } from "../../Pages/Manager/components/Tasks/components/Task/Task.types";
import { FormikTaskValues } from "./AddEditTaskForm.types";

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

  const handleAddItem = (
    values: FormikTaskValues,
    helpers: FormikHelpers<FormikTaskValues>
  ) => {
    console.log(values.dueDate, "formik dueDate");
    dispatch(
      createTasks({
        id: "",
        title: values.title,
        description: values.description,
        shortDescription: values.shortDescription,
        dueDate: values.dueDate,
        duration: values.duration,
        status: "UPCOMING",
        date: dateValue,
      })
    );
    setIsShow(false);
    helpers.resetForm();
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
          status: valueStatus,
          date: dateValue,
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
    description: yup.string().min(3, "Too short"),
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
      {({ values, handleSubmit, handleChange, handleBlur }) => (
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
            <S.HalfWrapper>
              <Input
                label="Task Title"
                type="text"
                name="title"
                placeholder="Task Title"
              />
            </S.HalfWrapper>
            <S.HalfWrapper>
              <Input
                label="Short Description"
                type="text"
                name="shortDescription"
                placeholder="Short Description"
              />
            </S.HalfWrapper>
            <S.FullWrapper>
              <S.TextArea
                label="Task Description"
                name="description"
                id="description"
                placeholder="Task Description"
                minRows={5}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </S.FullWrapper>
            <S.HalfWrapper>
              <Input
                label="Duration"
                type="number"
                name="duration"
                placeholder="Duration"
              />
            </S.HalfWrapper>
            <S.HalfWrapper>
              <InputDate />
            </S.HalfWrapper>
            <S.FullWrapper>
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
            </S.FullWrapper>
          </S.Form>
        </ModalWindow>
      )}
    </Formik>
  );
};

export default AddEditForm;
