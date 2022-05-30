import { Task } from "../../../App";
import Button from "../../Button/Button";
import Circle from "../../CircleTitle/CircleTitle";
import * as S from "./TaskItem.styles";

interface ListItemProps {
  task: Task;
  className?: string;
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ListItem = ({
  task: { id, title, description, date },
  className,
  setTasksList,
}: ListItemProps) => {
  const handleDeleteTask = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const delTaskTitle = e.currentTarget.title;
    console.log(delTaskTitle);
    setTasksList((prevState) => {
      return prevState.filter(
        (task) => task.title !== delTaskTitle
      );
    });
  };

  return (
    <S.ListItem id={id} className={className}>
      <Circle circleContent={title} />
      <S.ListItemContent>
        <S.ListName>{title}</S.ListName>
        <S.ListDescription>{description}</S.ListDescription>
        <S.ListDate>{date.toLocaleString()}</S.ListDate>
      </S.ListItemContent>
      <Button size="small" onClick={handleDeleteTask} title={title}>
        x
      </Button>
    </S.ListItem>
  );
};

export default ListItem;
