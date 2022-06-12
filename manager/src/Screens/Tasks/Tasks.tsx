import { useState } from "react";
import TaskItem from "./TaskItem/TaskItem";
import * as S from "./Tasks.styles";
// import { Task } from "../TaskManager/TaskManager";
import Form from "../../sharedComponents/FormElements/AddEditTaskForm";
import Button from "../../sharedComponents/Button/Button";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  date: Date;
}

const tasks: Task[] = [
  {
    id: uuidv4(),
    title: "Daily Status Too",
    description:
      "Finest fish and veggies  german specialty! American, raw, meaty. Healthy...and green...Finest fish and veggies  german specialty!Finest fish and veggies  german specialty!",
    date: new Date("2019-01-16"),
  },
  {
    id: uuidv4(),
    title: "call",
    description: "A german specialty!",
    date: new Date("2019-01-16"),
  },
  {
    id: uuidv4(),
    title: "BB",
    description: "American, raw, meaty",
    date: new Date("2019-01-16"),
  },
  {
    id: uuidv4(),
    title: "Green Bowl",
    description: "Healthy...and green...",
    date: new Date("2019-01-16"),
  },
];


// interface TasksProps {
//   tasksList: Task[];
//   setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
//   // handleDeleteTask:React.Dispatch<React.SetStateAction<Task[]>>;
// }

const Tasks = () => {

  const [tasksList, setTasksList] = useState<Task[]>(tasks);

  const handleDeleteTask = (id: string) => {
    setTasksList((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  };

  const [isShow, setIsShow] = useState(false);
  
  return (
    <S.TasksContainer>
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
    
        <Form setTasksList={setTasksList} setIsShow={setIsShow} isShow={isShow}/>
    
    </S.TasksContainer>
  );
};

export default Tasks;
