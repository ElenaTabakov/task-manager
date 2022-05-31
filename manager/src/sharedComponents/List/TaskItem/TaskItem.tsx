import { MouseEvent } from "react";
import { Task } from "../../../App";
import Button from "../../Button/Button";
import Circle from "../../CircleTitle/CircleTitle";
import * as S from "./TaskItem.styles";

interface TaskItemProps {
  task: Task;
  className?: string;
  onDelete: (id:string) => void;
}

const TaskItem = ({
  task: { id, title, description, date },
  className,
  onDelete,
}: TaskItemProps ) => {
 
  

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
    </S.ListItem>
  );
};

export default TaskItem;


