import { ChangeEvent,useState } from "react";
import { Task } from "../../App";
import Button from "../Button/Button";
import * as S from "./Form.styled";
import Input from "./Input/Input";

interface EditTaskFormProps {
  id: string;
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
  tasksList: Task[];
  title: string;
  description: string;
}

const EditTaskForm = ({ id, setTasksList, tasksList, title, description }: EditTaskFormProps) => {
  const [inputValue, setInputValue] = useState({title, description});

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const inputName = e.target.name;

        setInputValue((prevState) => {return {...prevState, [inputName] : value}});

  }
  const editTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(id)

    const newTasksList = tasksList.map((task) => {
      if (task.id === id) {    
        return { ...task, title: inputValue.title , description: inputValue.description};
      }

      return task;
    });

    setTasksList(newTasksList);
  };

  return (
    <S.FormWrapper>
      <S.Form onSubmit={editTaskHandler}>
        <Input
          name="title"
          placeholder={title}
          value={inputValue.title}
          onChange={changeValueHandler}
        />
        <Input
          name="description"
          placeholder={description}
          value={inputValue.description}
          onChange={changeValueHandler}
        />
        <Button>Edit Task</Button>
      </S.Form>
    </S.FormWrapper>
  );
};

export default EditTaskForm;
