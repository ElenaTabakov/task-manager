import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem/TaskItem";
import * as S from "./Tasks.styles";
// import { Task } from "../TaskManager/TaskManager";
import Form from "../../sharedComponents/FormElements/AddEditTaskForm";
import Button from "../../sharedComponents/Button/Button";
import { deleteTask } from "../../store/slices/tasksSlice";
import SearchForm from "../../sharedComponents/SearchForm";

export interface Task {
  id: string;
  title: string;
  description: string;
  date: Date;
  userId: number | null;
}

const Tasks = () => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const dispatch = useDispatch();

  const userId = useSelector((state: RootState) => state.userSlice.id);
  const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);

  const tasksByUser = tasks.filter((task) => task.userId == userId);

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const [isShow, setIsShow] = useState(false);

  const [filteredTasks, setFilteredTasks] = useState(tasksByUser);

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value;

    const tasksOnSearch = tasksByUser.filter((task) => {
      if (
        task.title.includes(inputVal) ||
        task.description.includes(inputVal)
      ) {
        return task;
      }
    });

    setFilteredTasks(tasksOnSearch);
    
  };
  
  const handleToggleSortTasks = () => {
   
    const sortedTasks = [...filteredTasks].sort((a,b) => {return a.title > b.title ? 1 : -1 });

   console.log(sortedTasks); 
   setFilteredTasks(sortedTasks);

  }

  return (
    <S.TasksContainer>
      <SearchForm handleOnChangeSearch={handleOnChangeSearch} />
      <Button type="button" onClick={handleToggleSortTasks} size="small" >
        Sort A-Z
      </Button>
      <Button onClick={() => setIsShow(true)}>Add Task</Button>
      <S.ListWrapper>
        <S.ListUl>
          {filteredTasks.map((task) => {
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

      <Form setIsShow={setIsShow} isShow={isShow} isEdit={false} />
    </S.TasksContainer>
  );
};

export default Tasks;
