import { useState, useEffect } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem/TaskItem";
import * as S from "./Tasks.styles";
import Form from "../../sharedComponents/FormElements/AddEditTaskForm";
import Button from "../../sharedComponents/Button/Button";
// import { deleteTask } from "../../store/slices/tasksSlice";
import SearchForm from "../../sharedComponents/SearchForm";
import { Action, AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import {
  fetchTasksByUserId,
  createTasks,
  updateTasks,
  deleteTasks,
  fetchTasksByDate,
} from "../../store/slices/tasksSlice";

interface TasksProps {
  dateValue: string;
}
export interface Task {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  dueDate: Date;
  duration: number;
  status: string;
}

const Tasks = ({dateValue} : TasksProps) => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();

  // const user = useSelector((state: RootState) => state.userSlice.user);
  const isAuth = useSelector((state: RootState) => state.userSlice.isAuth);

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTasks(id));
  };

  const [isShow, setIsShow] = useState(false);

  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);


  useEffect(() => {
    dispatch(fetchTasksByUserId());
    // setFilteredTasks(tasks);
  }, []);

  useEffect(() => {
 
  // const convertD = tasks.map((task: Task) => 
  //   ...task , task.dueDate == new Date(task.dueDate).toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'})
 
  // )
  // const date = dateValue.toLocaleDateString()
  // const dateReplaced = date.replace('/','-').replace('/','-')
     dispatch(fetchTasksByDate(dateValue));
  // console.log(dateReplaced);
     console.log(tasks, ' dispatch');
  }
  , [dateValue]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);


  

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value;
    console.log(inputVal);

      const tasksOnSearch = tasks.filter((task: Task) => {
        if (
          task.title.includes(inputVal) ||
          task.description.includes(inputVal)      
        ) {
          return task;
        }
      });
      setFilteredTasks(tasksOnSearch);
     
  };

  const [isAscSortButton, setIsAscButton] = useState<boolean>(true);

  const handleToggleSortTasks = () => {
    if (isAscSortButton) {
      const sortedTasks = [...filteredTasks].sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
      setFilteredTasks(sortedTasks);
      // setIsAscButton(false);
    } else {
      const sortedTasks = [...filteredTasks].sort((a, b) => {
        return a.title < b.title ? 1 : -1;
      });
      setFilteredTasks(sortedTasks);
    }

    setIsAscButton(!isAscSortButton);
  };

  return (
    <>
      <SearchForm handleOnChangeSearch={handleOnChangeSearch} />
      <Button type="button" onClick={handleToggleSortTasks} size="small">
        {isAscSortButton ? "Sort A-Z" : "Sort Z-A"}
      </Button>
      <Button onClick={() => setIsShow(true)}>Add Task</Button>
      <S.ListWrapper>
        <S.ListUl>
          {filteredTasks?.map((task: Task) => {
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
    </>
  );
};

export default Tasks;
