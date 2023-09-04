import { useState, useEffect } from "react";
import { RootState } from "../../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./components/Task/Task";
import * as S from "./Tasks.styles";
import AddEditForm from "../../../../components/AddEditTaskForm/AddEditTaskForm";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import {
  deleteTasks,
  fetchTasksByDate,
} from "../../../../store/slices/tasksSlice";
import { Loader } from "@mantine/core";
import { Task } from "./components/Task/Task.types";
import SideBarTask from "./components/Task/SideBarTask";
import TasksHeader from "./TasksHeader";

interface TasksProps {
  dateValue: Date;
}

const Tasks = ({ dateValue }: TasksProps) => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const statusFetchByDate = useSelector(
    (state: RootState) => state.taskSlice.statusFetchByDate
  );
  const [isShow, setIsShow] = useState<boolean>(false);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [visible, setVisible] = useState<boolean>(false);
  const [showSideTaskItem, setShowSideTaskItem] = useState<Task | null>(null);
  const [isAscSortButton, setIsAscButton] = useState<boolean>(true);

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTasks({ id, date: dateValue }));
  };


  useEffect(() => {
    if (statusFetchByDate === "loading") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [statusFetchByDate, setVisible]);

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
  
      <S.ListWrapper>
        {visible && (
          <S.LoadingOverlayWrapper>
            <Loader variant="bars" />
          </S.LoadingOverlayWrapper>
        )}
        <S.ListUl>
          <TasksHeader
            setIsShow={setIsShow}
            handleOnChangeSearch={handleOnChangeSearch}
            handleToggleSortTasks={handleToggleSortTasks}
            isAscSortButton={isAscSortButton}
          />
          {filteredTasks?.map((task: Task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={() => handleDeleteTask(task.id)}
                dateValue={dateValue}
                showSideTaskItem = {setShowSideTaskItem}
                activeTask={task.id == showSideTaskItem?.id ? true : false}
                status={task.status}
              />
            );
          })}
        </S.ListUl>
        <S.SideBarWrapper>
          {showSideTaskItem && (
            <SideBarTask
              task={showSideTaskItem}
              dateValue={dateValue}
              onDelete={() => handleDeleteTask(showSideTaskItem.id)}
            />
          )}
        </S.SideBarWrapper>
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
