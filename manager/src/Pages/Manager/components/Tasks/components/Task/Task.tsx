import { useState } from "react";
// import { RootState } from "../../../../../../store/store";
// import { useSelector } from "react-redux";
import Button from "../../../../../../sharedComponents/Button/Button";
import Circle from "../../../../../../sharedComponents/CircleTitle/CircleTitle";
import * as S from "./Task.styles";
import AddEditForm from "../../../../../../components/AddEditTaskForm/AddEditTaskForm";
import { Task } from "./Task.types";

interface TaskItemProps {
  task: Task;
  className?: string;
  dateValue: Date;
  onDelete: (id: string) => void;
}

const TaskItem = ({
  task: { id, title, description, shortDescription, dueDate, duration, status },
  task,
  className,
  dateValue,
  onDelete,
}: TaskItemProps) => {
  const [visibleEdirForm, setVisibleEditForm] = useState<boolean>(false);
  // const tasks = useSelector((state: RootState) => state.taskSlice.tasks);

  return (
    <S.ListItem id={id} className={`${className} status-${status}`}>
      <Circle circleContent={title} />
      <S.ListItemContent>
        <S.ListName>{title}</S.ListName>
        <S.ListDescription>{description}</S.ListDescription>
        <S.ListDate>
          {new Date(dueDate).toLocaleDateString("he-IL", {
            timeZone: "Asia/Jerusalem",
          })}{" "}
          {`${new Date(dueDate).getHours()}:${new Date(dueDate).getMinutes()}`}
        </S.ListDate>
        <p>{status}</p>
      </S.ListItemContent>
      <Button size="small" onClick={() => onDelete(id)}>
        x
      </Button>
      <Button size="small" onClick={() => setVisibleEditForm(!visibleEdirForm)}>
        {" "}
        {visibleEdirForm ? "Close Edit Form" : "Edit Task"}{" "}
      </Button>
      <AddEditForm
        isEdit
        isShow={visibleEdirForm}
        setIsShow={setVisibleEditForm}
        task={task}
        status={status}
        dateValue={dateValue}
      />
    </S.ListItem>
  );
};

export default TaskItem;
