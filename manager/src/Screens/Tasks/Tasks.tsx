import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux"; 
import TaskItem from "./TaskItem/TaskItem";
import * as S from "./Tasks.styles";
// import { Task } from "../TaskManager/TaskManager";
import Form from "../../sharedComponents/FormElements/AddEditTaskForm";
import Button from "../../sharedComponents/Button/Button";
import { v4 as uuid } from 'uuid';
import  { deleteTask }  from '../../store/slices/tasksSlice'

export interface Task {
  id: string;
  title: string;
  description: string;
  date: Date;
}

const Tasks = () => {

  const tasks = useSelector((state: RootState) => state.taskSlice.tasks)
  const dispatch = useDispatch()



  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const [isShow, setIsShow] = useState(false);
  
  return (
    <S.TasksContainer>
      <Button onClick={() => setIsShow(true)}>Add Task</Button>
      <S.ListWrapper>
        <S.ListUl>
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={() => handleDeleteTask(task.id)}
              />
            );
          })}
        </S.ListUl>
      </S.ListWrapper>
    
      <Form  setIsShow={setIsShow} isShow={isShow} isEdit={false}/>
    
    </S.TasksContainer>
  );
};

export default Tasks;
