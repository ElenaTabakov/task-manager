import React, { ChangeEvent, useState } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux"; 
import * as S from "./Form.styled";
import Input from "./Input/Input";
import { Task } from "../../Screens/Tasks/Tasks";
import ModalWindow from "../ModalWindow/ModalWindow";
import { v4 as uuid } from "uuid";
import DatePicker from "react-datepicker";
import  { addTask , editTask }  from '../../store/slices/tasksSlice'
import "react-datepicker/dist/react-datepicker.css";



interface FormProps {
  setTasksList?: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: boolean;
  isEdit: boolean;
  task?: Task ;
  tasksList?: Task[];
}

const Form = ({
  setIsShow,
  isShow,
  isEdit = false,
  // task,
  // tasksList,
}: FormProps) => {
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    description: "",
  });
  const [inputValue, setInputValue] = useState(
    task
      ? { title: task.title, description: task.description }
      : { title: "", description: "" }
  );
  const [startDate, setStartDate] = useState(task ? task.date : new Date());

  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);

  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setInputValue((prevState) => {
      return { ...prevState, [inputName]: value };
    });
    setErrorMessage((prevState) => {
      return { ...prevState, [inputName]: "" };
    });

    if (!value) {
      setErrorMessage((prevState) => {
        return { ...prevState, [inputName]: "Enter your " + inputName };
      });
    }
  };

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTask({id: uuid(), title: inputValue.title, description: inputValue.description, date: startDate,}));
    setIsShow(false);
    setInputValue({ title: "", description: "" });
  };

  const editTaskHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (tasksList && task) {
      // console.log(task.id);

      const newTasksList = tasksList.map((localtask) => {
        if (localtask.id === task.id) {
          return {
            ...localtask,
            title: inputValue.title,
            description: inputValue.description,
            date: startDate,
          };
        }

        return localtask;
      });

      // setTasksList(newTasksList);
      setIsShow(false);
    }

    return task;
  };

  return (
    
    <ModalWindow
      title={isEdit ? "Edit Task" : "Add New Task"}
      visible={isShow}
      setIsShow={setIsShow}
      cancelBtnText="Cancel"
      confirmBtnText={isEdit ? "Edit" : "Add"}
      onSubmit={isEdit ? editTaskHandler : handleAddItem}
      disabled={!inputValue.title || !inputValue.description}
    >
      <S.Form>
        <Input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleInputChange}
          error={errorMessage.title}
          value={inputValue.title}
        />
        <Input
          type="text"
          name="description"
          placeholder="Task Description"
          onChange={handleInputChange}
          error={errorMessage.description}
          value={inputValue.description}
        />
       <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
      </S.Form>
    </ModalWindow>
  );
};

export default Form;
