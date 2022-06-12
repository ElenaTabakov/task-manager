import React, { ChangeEvent, useState } from "react";
import * as S from "./Form.styled";
import Input from "./Input/Input";
import { Task } from "../../Screens/Tasks/Tasks";
import ModalWindow from "../ModalWindow/ModalWindow";
import { v4 as uuid } from 'uuid';

interface FormProps {
  // props: object;
  // addNewTask:object;
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: boolean;
  isEdit?: boolean;
  task?: Task;
  tasksList?: Task[];
}

const Form = ({ setTasksList, setIsShow, isShow, isEdit, task, tasksList}: FormProps) => {
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    description: "",
  });
  const [inputValue, setInputValue] = useState({ title: "", description: "" });

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
    setTasksList((prevState) => {
      return [
        ...prevState,
        {
          id: uuid(),
          title: inputValue.title,
          description: inputValue.description,
          date: new Date(),
        },
      ];
    });
    setIsShow(false);
    setInputValue({title: "", description: "" })
  };


  const editTaskHandler = (e:  React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (tasksList)  {

      const newTasksList = tasksList.map((task) => {
        console.log(task.id);
        if (task.id === task.id) {    
          return { ...task, title: inputValue.title , description: inputValue.description};
        }
  
        return task;
      });
    
      setTasksList(newTasksList);
   
    }


  };





  return (
    <ModalWindow
      title={isEdit ? 'Edit Task' : 'Add New Task'}
      visible={isShow}
      setIsShow={setIsShow}
      cancelBtnText="Cancel"
      confirmBtnText={isEdit ? 'Edit' : 'Add'}
      onSubmit={task ?  editTaskHandler : handleAddItem}
      disabled={!inputValue.title || !inputValue.description}     
    >
      <S.Form>
        <Input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleInputChange}
          error={errorMessage.title}
          value={task ? task.title : inputValue.title}
        />
        <Input
          type="text"
          name="description"
          placeholder="Task Description"
          onChange={handleInputChange}
          error={errorMessage.description}
          value={task ? task.description : inputValue.description}
        />
      </S.Form>
    </ModalWindow>
  );
};

export default Form;
