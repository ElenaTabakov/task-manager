import { IconTrashX } from "@tabler/icons";
import React, { useContext, useState } from "react";
import AddEditForm from "../../../../../../components/AddEditTaskForm/AddEditTaskForm";
import Button from "../../../../../../sharedComponents/Button/Button";
import { SideBarWrapper } from "./SideBarTask.styles";
import { Task } from "./Task.types";
import TaskContext from "../../../../../../store/TaskContext";


interface SideBarTaskProps {
  dateValue: Date;
  onDelete: (id: string) => void;
  task: Task;
}

const SideBarTask = ({ dateValue, onDelete, task }: SideBarTaskProps) => {
  const [visibleEdirForm, setVisibleEditForm] = useState<boolean>(false);
  const {selectedTask} = useContext(TaskContext);

  console.log(task);
  return (
    <SideBarWrapper>
      <h2>{selectedTask ? selectedTask.title : ''}</h2>
      <div>{selectedTask ? selectedTask.description : ''}</div>
      <div className="task_header_btns">
        
        {selectedTask &&
        <Button
          size="small"
          onClick={() => setVisibleEditForm(!visibleEdirForm)}
          title="Edit task"
          bgColor="purple"
        > 
       
          {visibleEdirForm ? "Close Edit Form" : "Edit Task"}
        </Button>
       }
        {selectedTask &&
        <Button size="small" onClick={() => onDelete(selectedTask ? selectedTask.id : '')} title="Delete">
          <IconTrashX size="16" />
        </Button>
       }
      </div>
      {visibleEdirForm && (
        <AddEditForm
          isEdit
          isShow={visibleEdirForm}
          setIsShow={setVisibleEditForm}
          task={selectedTask ? selectedTask : undefined }
          status={selectedTask ? selectedTask.status : ''} 
          dateValue={dateValue}
        />
      )}
    </SideBarWrapper>
  );
};

export default SideBarTask;
