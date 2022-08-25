import React, { ChangeEvent, useState } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./Form.styled";
import Input from "./Input/Input";
import { Task } from "../../Screens/Tasks/Tasks";
import ModalWindow from "../ModalWindow/ModalWindow";
import { addTask, editTask } from "../../store/slices/tasksSlice";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../hooks/use-auth";
import InputDate from "./InputDate";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";


export interface FormikTaskValues {
  id: string;
  title: string;
  description: string;
  date: Date;
}

interface FormProps {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: boolean;
  isEdit: boolean;
  task?: Task;
}

const Form = ({
  setIsShow,
  isShow,
  isEdit = false,
  task,
}: // tasksList,
FormProps) => {
  const { id } = useAuth();

  // const [errorMessage, setErrorMessage] = useState({
  //   title: "",
  //   description: "",
  // });
  // const [inputValue, setInputValue] = useState(
  //   task
  //     ? { title: task.title, description: task.description }
  //     : { title: "", description: "" }
  // );

  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);

  const dispatch = useDispatch();

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   const inputName = e.target.name;

  //   setInputValue((prevState) => {
  //     return { ...prevState, [inputName]: value };
  //   });
  //   setErrorMessage((prevState) => {
  //     return { ...prevState, [inputName]: "" };
  //   });

  //   if (!value) {
  //     setErrorMessage((prevState) => {
  //       return { ...prevState, [inputName]: "Enter your " + inputName };
  //     });
  //   }
  // };

  const handleAddItem = (
    values: FormikTaskValues,
    helpers: FormikHelpers<FormikTaskValues>
  ) => {
    // e.preventDefault();
    dispatch(
      addTask({
        title: values.title,
        description: values.description,
        date: values.date,
        userId: id,
      })
    );
    setIsShow(false);
    helpers.resetForm();
    // setInputValue({ title: "", description: "" });
  };

  const editTaskHandler = (
    values: FormikTaskValues
  ) => {
    // e.preventDefault();

    if (tasks && task) {
      // console.log(task.id);
      dispatch(
        editTask({
          id: values.id,
          title: values.title,
          description: values.description,
          date: values.date,
          userId: task.userId,
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
        date: new Date(task.date),
      };
    }
    return {
      id: "",
      title: "",
      description: "",
      date: new Date(),
    };
  };

  const validationSchema = yup.object().shape({
    id: yup.string(),
    title: yup.string().required("Requred").min(3, "Too short"),
    description: yup.string().required("Requred").min(3, "Too short"),
    date: yup.date(),
  });


  return (
    <Formik
      initialValues={initialValuesTask(task)}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={
        // (values: FormikTaskValues): void | Promise<any> => {
        // console.log(values);
        
        isEdit ? editTaskHandler : handleAddItem
      // }
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
        dirty
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
              type="text"
              name="title"
              placeholder="Task Title"
              onChange={handleChange}
              error={errors.title}
              value={values.title}
            />
            <Input
              type="text"
              name="description"
              placeholder="Task Description"
              onChange={handleChange}
              error={errors.description}
              value={values.description}
            />
            <InputDate />
          </S.Form>
        </ModalWindow>
      )}
    </Formik>
  );
};

export default Form;
function submitForm(values: FormikTaskValues, submitForm: any) {
  throw new Error("Function not implemented.");
}

