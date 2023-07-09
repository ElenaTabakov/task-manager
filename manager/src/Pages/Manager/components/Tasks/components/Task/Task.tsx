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
  showSideTask: (task: Task) => void;
  activeTask: boolean;
  status: string;
}

const TaskItem = ({
  task: { id, title, description, shortDescription, dueDate, duration, status },
  task,
  className,
  dateValue,
  onDelete,
  showSideTask,
  activeTask,
}: TaskItemProps) => {
  // const [visibleEdirForm, setVisibleEditForm] = useState<boolean>(false);
  const [descriptionHide, setDescriptionHide] = useState<boolean>(true);
  // const [activeTask, setActiveTask] = useState<Task | null>(null);
  // const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const descRef = useRef<HTMLDivElement | null>(null);
  console.log(descRef.current?.clientHeight);

  const handleOpenSideTask = (task: Task) => {
    setDescriptionHide(false);
    showSideTask(task);
  };

  return (
    <S.ListWrapper>
      <S.DateListWrapper>
      {`${('0' + new Date(dueDate).getHours()).slice(-2)}:${('0' + new Date(
              dueDate
            ).getMinutes()).slice(-2)}`}
      </S.DateListWrapper>
      <S.ListItem
        activeTask={activeTask}
        id={id}
        className={`${className ? className : ""} status-${status} `}
        status={status}
      >
        <Circle circleContent={title} className={status} />
        <S.ListItemContent>
          <S.Task_header>
            <S.ListName>{title}</S.ListName>            
          </S.Task_header>
          <S.ShortDescription className={descriptionHide ? "active" : "hide"}>
            {shortDescription}
            <a href="#" onClick={() => handleOpenSideTask(task)}>
                more...
              </a>
               {/* {descriptionHide && (
              // <a href="#" onClick={() => setDescriptionHide(false)}>
             
           )} */}
          </S.ShortDescription>
          {/* <S.DescriptionWrapper
            height={descriptionHide ? 0 : descRef.current?.clientHeight || 0}
          >
            <S.ListDescription ref={descRef}>
              {description}
              <a href="#" onClick={() => setDescriptionHide(true)}>
                less...
              </a>
            </S.ListDescription>
          </S.DescriptionWrapper> */}
          <S.ListDate>
            {new Date(dueDate).toLocaleDateString("he-IL", {
              timeZone: "Asia/Jerusalem",
            })}{" "}
            {`${new Date(dueDate).getHours()}:${new Date(
              dueDate
            ).getMinutes()}`}
          </S.ListDate>
          <p>{status}</p>
        </S.ListItemContent>

      
      </S.ListItem>
    </S.ListWrapper>
  );
};

export default TaskItem;
