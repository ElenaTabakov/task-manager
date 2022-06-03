import TaskItem from './TaskItem/TaskItem'
import * as S from "./Tasks.styles";
import { Task } from "../../App";

interface CurrentTasksProps {
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
  // handleDeleteTask:React.Dispatch<React.SetStateAction<Task[]>>;
}



const CurrentTasks = ({ tasksList,  setTasksList}: CurrentTasksProps) => {
  // const tasksList =;
  const handleDeleteTask = (id: string) => {
    setTasksList(prevState => {
      return prevState.filter(
        task => task.id !== id
      );
    });
  };


  return (
    <S.ListWrapper>
      <S.ListUl>
        {tasksList.map((task) => {
          return <TaskItem key={task.id} task={task}  onDelete={handleDeleteTask}  setTasksList={setTasksList} tasksList={tasksList}/>;
        })}
      </S.ListUl>
    </S.ListWrapper>
  );
};

export default CurrentTasks;
