import { IconTrashX } from "@tabler/icons";
import React, { useContext, useState } from "react";
import AddEditForm from "../../../../../../components/AddEditTaskForm/AddEditTaskForm";
import Button from "../../../../../../sharedComponents/Button/Button";
import { SideBarWrapper, ButtonClose } from "./SideBarTask.styles";
import { Task } from "./Task.types";
import TaskContext from "../../../../../../store/TaskContext";

interface SideBarTaskProps {
  dateValue: Date;
  onDelete: (id: string) => void;
  task: Task;
}

const SideBarTask = ({ dateValue, onDelete, task }: SideBarTaskProps) => {
  const [visibleEdirForm, setVisibleEditForm] = useState<boolean>(false);
  const { selectedTask, setSelectedTask } = useContext(TaskContext);
  
  console.log(task);
  if (selectedTask) {
    return (
      <SideBarWrapper>
        <ButtonClose title="close" onClick={() => setSelectedTask(null)}>
          +
        </ButtonClose>
        <h2>{selectedTask.title}</h2>
        <div>{selectedTask.description}</div>
        <div className="task_header_btns">
          <Button
            size="small"
            onClick={() => setVisibleEditForm(!visibleEdirForm)}
            title="Edit task"
            bgColor="purple"
          >
            {visibleEdirForm ? "Close Edit Form" : "Edit Task"}
          </Button>

          <Button
            size="small"
            onClick={() => onDelete(selectedTask.id)}
            title="Delete"
          >
            <IconTrashX size="16" />
          </Button>
        </div>
        {visibleEdirForm && (
          <AddEditForm
            isEdit
            isShow={visibleEdirForm}
            setIsShow={setVisibleEditForm}
            task={selectedTask}
            status={selectedTask.status}
            dateValue={dateValue}
          />
        )}
      </SideBarWrapper>
    );
  } else {
    return null;
  }
};

export default SideBarTask;
