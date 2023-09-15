import { useState, useRef, useContext, useEffect } from "react";
import Circle from "../../../../../../sharedComponents/CircleTitle/CircleTitle";
import * as S from "./Task.styles";
import { Task } from "./Task.types";
import TaskContext from "../../../../../../store/TaskContext";
import Button from "../../../../../../sharedComponents/Button/Button";
import { IconTrashX, IconEdit } from "@tabler/icons";
import AddEditForm from "../../../../../../components/AddEditTaskForm/AddEditTaskForm";

interface TaskItemProps {
  task: Task;
  className?: string;
  dateValue: Date;
  onDelete: (id: string) => void;
  showSideTaskItem: (task: Task) => void;
  activeTask: boolean;
  status: string;
}

const TaskItem = ({
  task: { id, title, description, shortDescription, dueDate, duration, status },
  task,
  className,
  dateValue,
  onDelete,
  showSideTaskItem,
  activeTask,
}: TaskItemProps) => {
  const [descriptionHide, setDescriptionHide] = useState<boolean>(true);
  const { selectedTask, setSelectedTask } = useContext(TaskContext);
  const [visibleEdirForm, setVisibleEditForm] = useState<boolean>(false);

  const handleOpenSideTask = (task: Task) => {
    setDescriptionHide(false);
    showSideTaskItem(task);
    setSelectedTask(task);
  };

  return (
    <S.ListWrapper>
      <S.DateListWrapper>
        {`${("0" + new Date(dueDate).getHours()).slice(-2)}:${(
          "0" + new Date(dueDate).getMinutes()
        ).slice(-2)}`}
      </S.DateListWrapper>
      <S.ListItem
        activeTask={selectedTask ? activeTask : false}
        id={id}
        className={`${className ? className : ""} status-${status} `}
        status={status}
        onClick={() => handleOpenSideTask(task)}
      >
        <Circle circleContent={title} className={status} />
        <S.ListItemContent>
          <S.Task_header>
            <S.ListName>{title}</S.ListName>
            <S.ShortDescription className="taskdesc">
              {shortDescription}
            </S.ShortDescription>
          </S.Task_header>
          <S.ListDate>
            {new Date(dueDate).toLocaleDateString("he-IL", {
              timeZone: "Asia/Jerusalem",
            })}{" "}
            {`${("0" + new Date(dueDate).getHours()).slice(-2)}:${(
              "0" + new Date(dueDate).getMinutes()
            ).slice(-2)}`}
          </S.ListDate>
          <S.StatusWrapper>{status}</S.StatusWrapper>
          <S.TaskButtonsBottom>
            <Button
              size="small"
              onClick={() => setVisibleEditForm(!visibleEdirForm)}
              title="Edit task"
              bgColor="purple"
            >
              <IconEdit size={16} />
            </Button>

            <Button size="small" onClick={() => onDelete(id)} title="Delete">
              <IconTrashX size="16" />
            </Button>
          </S.TaskButtonsBottom>
        </S.ListItemContent>
      </S.ListItem>
      {visibleEdirForm && (
        <AddEditForm
          isEdit
          isShow={visibleEdirForm}
          setIsShow={setVisibleEditForm}
          task={task}
          status={status}
          dateValue={dateValue}
        />
      )}
    </S.ListWrapper>
  );
};

export default TaskItem;
