import { useState } from "react";
import { Task } from "../../../App";
import Button from "../../Button/Button";
import Circle from "../../CircleTitle/CircleTitle";
import EditTaskForm from "../../FormElements/EditTaskForm";
import * as S from "./TaskItem.styles";

interface TaskItemProps {
  task: Task;
  className?: string;
  onDelete: (id:string) => void;
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({
  task: { id, title, description, date },
  className,
  onDelete,
  setTasksList,
  tasksList
}: TaskItemProps ) => {
 
const [visibleEdirForm,setVisibleEditForm] = useState<boolean>(false);  

  return (
    <S.ListItem id={id} className={className}>
      <Circle circleContent={title} />
      <S.ListItemContent>
        <S.ListName>{title}</S.ListName>
        <S.ListDescription>{description}</S.ListDescription>
        <S.ListDate>{date.toLocaleString()}</S.ListDate>
      </S.ListItemContent>
      <Button size="small" onClick={() => onDelete(id)} >
        x
      </Button>
      <Button size='small' onClick={() => setVisibleEditForm(!visibleEdirForm)}>Edit Task</Button>
      {visibleEdirForm && <EditTaskForm id={id} setTasksList={setTasksList} tasksList={tasksList}/>}
    </S.ListItem>
  );
};

export default TaskItem;


