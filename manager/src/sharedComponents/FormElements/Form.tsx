import { ChangeEvent, MouseEventHandler, useState } from "react";
import * as S from "./Form.styled";
import Input from "./Input/Input";
import Button from "../Button/Button";
import { Task } from "../../App";



interface FormProps {
  // props: object;
  // addNewTask:object;
  setTasksList:  React.Dispatch<React.SetStateAction<Task[]>>
}

const Form = ({setTasksList}: FormProps) => {


    const [errorMessage, setErrorMessage] = useState({
        title: "",
        description: "",
      });
     const [inputValue, setInputValue] = useState({ title: "", description: "" });
      
     

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setInputValue((prevState) => {
      return {...prevState, [inputName]: value  };
    });

    setErrorMessage((prevState) => {
      return {...prevState, [inputName]: ''};
    });
    
    if(value.length === 0){
      setErrorMessage((prevState) => {
        return{...prevState, [inputName] : 'Enter your ' +  inputName}
      });
    }
    
  }

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTasksList(prevState => {
          return [...prevState, {id: (prevState.length + 1).toString() , title: inputValue.title , description: inputValue.description , date: 'prosto text'}]
        })
  };
      
  return (
    <S.Form onSubmit={handleAddItem}>
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
      <Button>Add Task</Button>
    </S.Form>
  );
};

export default Form;
