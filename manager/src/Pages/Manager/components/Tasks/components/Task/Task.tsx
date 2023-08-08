import { useState, useRef,useContext } from "react";
import { IconTrashX } from "@tabler/icons";
import Button from "../../../../../../sharedComponents/Button/Button";
import Circle from "../../../../../../sharedComponents/CircleTitle/CircleTitle";
import * as S from "./Task.styles";
import AddEditForm from "../../../../../../components/AddEditTaskForm/AddEditTaskForm";
import { Task } from "./Task.types";
import TaskContext from "../../../../../../store/TaskContext";

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
  const [descriptionHide, setDescriptionHide] = useState<boolean>(true);
  const descRef = useRef<HTMLDivElement | null>(null);
  console.log(descRef.current?.clientHeight);

  const handleOpenSideTask = (task: Task) => {
    setDescriptionHide(false);
    showSideTask(task);
    setSelectedTask(task);
  };

  const {selectedTask,setSelectedTask} = useContext(TaskContext);

  return (
    <S.ListWrapper>
      <S.DateListWrapper>
      {`${('0' + new Date(dueDate).getHours()).slice(-2)}:${('0' + new Date(
              dueDate
            ).getMinutes()).slice(-2)}`}
      </S.DateListWrapper>
      <S.ListItem
        activeTask = {selectedTask ? activeTask : false}
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
          </S.ShortDescription>
          <S.ListDate>
            {new Date(dueDate).toLocaleDateString("he-IL", {
              timeZone: "Asia/Jerusalem",
            })}{" "}
           {`${('0' + new Date(dueDate).getHours()).slice(-2)}:${('0' + new Date(
              dueDate
            ).getMinutes()).slice(-2)}`}
          </S.ListDate>
          <S.StatusWrapper>{status}</S.StatusWrapper>
        </S.ListItemContent>

      
      </S.ListItem>
    </S.ListWrapper>
  );
};

export default TaskItem;
