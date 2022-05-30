import ListItem from './TaskItem/TaskItem'
import * as S from "./Tasks.styles";
import { Task } from "../../App";

interface CurrentTasksProps {
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const CurrentTasks = ({ tasksList, setTasksList}: CurrentTasksProps) => {
  // const tasksList =;
  return (
    <S.ListWrapper>
      <S.ListUl>
        {tasksList.map((task) => {
          return <ListItem key={task.id} task={task} setTasksList={setTasksList}/>;
        })}
      </S.ListUl>
    </S.ListWrapper>
  );
};

export default CurrentTasks;
