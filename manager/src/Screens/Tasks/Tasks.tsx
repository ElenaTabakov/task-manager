import { useState, useEffect } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem/TaskItem";
import * as S from "./Tasks.styles";
import AddEditForm from "../../sharedComponents/FormElements/AddEditTaskForm";
import Button from "../../sharedComponents/Button/Button";
// import { deleteTask } from "../../store/slices/tasksSlice";
import SearchForm from "../../sharedComponents/SearchForm";
import { Action, AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import {
  fetchTasksByUserId,
  deleteTasks,
  fetchTasksByDate,
} from "../../store/slices/tasksSlice";
import { Loader } from "@mantine/core";

interface TasksProps {
  dateValue: Date;
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

const Tasks = ({ dateValue }: TasksProps) => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const statusFetchByDate = useSelector(
    (state: RootState) => state.taskSlice.statusFetchByDate
  );

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTasks({ id, date: dateValue }));
  };
  const [isShow, setIsShow] = useState<boolean>(false);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (statusFetchByDate == "loading") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [statusFetchByDate]);

  useEffect(() => {
    dispatch(fetchTasksByDate(dateValue));
  }, []);

  useEffect(() => {
    dispatch(fetchTasksByDate(dateValue));
    console.log(tasks, " dispatch");
  }, [dateValue]);

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
      {visible && (
        <S.LoadingOverlayWrapper>
          <Loader variant="bars"   />
        </S.LoadingOverlayWrapper>
      )}

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
                dateValue={dateValue}
              />
            );
          })}
        </S.ListUl>
      </S.ListWrapper>
      {isShow && (
        <AddEditForm
          setIsShow={setIsShow}
          isShow={isShow}
          isEdit={false}
          dateValue={dateValue}
        />
      )}
    </>
  );
};

export default Tasks;
