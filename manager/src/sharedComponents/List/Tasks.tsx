import { useState } from "react";
import TaskItem from "./TaskItem/TaskItem";
import * as S from "./Tasks.styles";
import { Task } from "../Screens/TaskManager/TaskManager";
import ModalWindow from "../Screens/TaskManager/ModalWindow/ModalWindow";
import Form from "../FormElements/Form";
import Button from "../Button/Button";

interface TasksProps {
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
  // handleDeleteTask:React.Dispatch<React.SetStateAction<Task[]>>;
}

const Tasks = ({ tasksList, setTasksList }: TasksProps) => {
  const handleDeleteTask = (id: string) => {
    setTasksList((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  };

  const [isShow, setIsShow] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsShow(true)}>Add Task</Button>
      <S.ListWrapper>
        <S.ListUl>
          {tasksList.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                setTasksList={setTasksList}
                tasksList={tasksList}
              />
            );
          })}
        </S.ListUl>
      </S.ListWrapper>
     <ModalWindow title="Boo"  visible={isShow} onClose={() => setIsShow(false)}>
        <Form setTasksList={setTasksList} setIsShow={setIsShow}/>
     </ModalWindow>
    </>
  );
};

export default Tasks;
