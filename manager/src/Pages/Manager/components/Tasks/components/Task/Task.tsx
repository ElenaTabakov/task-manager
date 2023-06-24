import { useState, useRef } from "react";
import { IconTrashX } from "@tabler/icons";
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
  const [descriptionHide, setDescriptionHide] = useState<boolean>(true);
  // const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const descRef = useRef<HTMLDivElement | null>(null);
  console.log(descRef.current?.clientHeight);

  return (
    <S.ListItem id={id} className={`${className} status-${status}`}>
      <Circle circleContent={title} className={status} />
      <S.ListItemContent>
        <S.Task_header>
          <S.ListName>{title}</S.ListName>
          <div className="task_header_btns">
            <Button
              size="small"
              onClick={() => setVisibleEditForm(!visibleEdirForm)}
              title="Edit task"
              bgColor="purple"
            >
              {" "}
              {visibleEdirForm ? "Close Edit Form" : "Edit Task"}{" "}
            </Button>
            <Button size="small" onClick={() => onDelete(id)} title="Delete">
              <IconTrashX size="16" />
            </Button>
          </div>
        </S.Task_header>
        <S.ShortDescription className={descriptionHide ? "active" : "hide"}>
            {shortDescription}
            {descriptionHide &&  <a href="#" onClick={() => setDescriptionHide(false)}>
              more...
            </a> }
          </S.ShortDescription>
        <S.DescriptionWrapper height = {descriptionHide ? 0 : descRef.current?.clientHeight || 0 }>
          <S.ListDescription
            // className={descriptionHide ? "hide" : "active"}
            ref={descRef}
          >
            {description}
            <a href="#" onClick={() => setDescriptionHide(true)}>
              less...
            </a>
          </S.ListDescription>
        </S.DescriptionWrapper>
        <S.ListDate>
          {new Date(dueDate).toLocaleDateString("he-IL", {
            timeZone: "Asia/Jerusalem",
          })}{" "}
          {`${new Date(dueDate).getHours()}:${new Date(dueDate).getMinutes()}`}
        </S.ListDate>
        <p>{status}</p>
      </S.ListItemContent>

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
