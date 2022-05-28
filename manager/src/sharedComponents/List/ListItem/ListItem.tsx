import Circle from "./CircleTitle/CircleTitle";
import { Task } from "../List";
import * as S from "./ListItem.styles";

interface ListItemProps {
  // id: string;
  // title: string;
  // className?: string;
  // description: string;
  // date: string;
  task: Task;
  className?: string;
}

const ListItem = ({
  task: { id, title, description, date },
  className,
}: ListItemProps) => {
  return (
    <S.ListItem id={id} className={className}>
      <Circle circleContent={title} />
      <S.ListItemContent>
        <S.ListName>{title}</S.ListName>
        <S.ListDescription>{description}</S.ListDescription>
        <S.ListDate>{date}</S.ListDate>
      </S.ListItemContent>
    </S.ListItem>
  );
};

export default ListItem;
