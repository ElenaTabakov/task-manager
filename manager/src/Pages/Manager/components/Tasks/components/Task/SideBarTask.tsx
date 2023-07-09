import { IconTrashX } from "@tabler/icons";
import React, { useState } from "react";
import AddEditForm from "../../../../../../components/AddEditTaskForm/AddEditTaskForm";
import Button from "../../../../../../sharedComponents/Button/Button";
import { Task } from "./Task.types";

interface SideBarTaskProps {
  dateValue: Date;
  onDelete: (id: string) => void;
  task: Task;
}

const SideBarTask = ({ dateValue, onDelete, task }: SideBarTaskProps) => {
  const [visibleEdirForm, setVisibleEditForm] = useState<boolean>(false);
  console.log(task)
  return (
    <div>
      <h2>{task.title}</h2>
      <div>{task.description}</div>
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
        <Button size="small" onClick={() => onDelete(task.id)} title="Delete">
          <IconTrashX size="16" />
        </Button>
      </div>
      <AddEditForm
        isEdit
        isShow={visibleEdirForm}
        setIsShow={setVisibleEditForm}
        task={task}
        status={task.status}
        dateValue={dateValue}
      />
    </div>
  );
};

export default SideBarTask;
