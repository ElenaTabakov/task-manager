import { useState, useEffect } from "react";
import { RootState } from "../../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./components/Task/Task";
import * as S from "./Tasks.styles";
import AddEditForm from "../../../../components/AddEditTaskForm/AddEditTaskForm";
import Button from "../../../../sharedComponents/Button/Button";
// import { deleteTask } from "../../store/slices/tasksSlice";
import SearchForm from "../../../../sharedComponents/SearchForm";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import {
  deleteTasks,
  fetchTasksByDate,
} from "../../../../store/slices/tasksSlice";
import { Loader } from "@mantine/core";
import { Task } from "./components/Task/Task.types";
import { LightTheme,DarkTheme, lightTheme } from "../../../../styles/theme";

interface TasksProps {
  dateValue: Date;
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
    if (statusFetchByDate === "loading") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [statusFetchByDate, setVisible]);

  // useEffect(() => {
  //   dispatch(fetchTasksByDate(dateValue));
  // }, []);

  useEffect(() => {
    dispatch(fetchTasksByDate(dateValue));
    console.log(tasks, " dispatch");
  }, [dateValue, fetchTasksByDate, dispatch]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value;
    console.log(inputVal);

    const tasksOnSearch = tasks.filter((task: Task) => {
      if (
        task.title.toLowerCase().includes(inputVal.toLowerCase()) ||
        task.description.toLowerCase().includes(inputVal.toLowerCase())
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
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      });
      setFilteredTasks(sortedTasks);
    } else {
      const sortedTasks = [...filteredTasks].sort((a, b) => {
        return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
      });
      setFilteredTasks(sortedTasks);
    }

    setIsAscButton(!isAscSortButton);
  };

  return (
    <>
      {visible && (
        <S.LoadingOverlayWrapper>
          <Loader variant="bars" />
        </S.LoadingOverlayWrapper>
      )}

      <SearchForm handleOnChangeSearch={handleOnChangeSearch} />
      <Button type="button" onClick={handleToggleSortTasks} bgColor={'secondary'}>
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
          status="UPCOMING"
        />
      )}
    </>
  );
};

export default Tasks;
