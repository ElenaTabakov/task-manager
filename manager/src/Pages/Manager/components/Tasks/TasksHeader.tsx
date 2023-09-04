import React from "react";
import SearchForm from "../../../../sharedComponents/SearchForm";
import * as S from './TasksHeader.styles';
import Button from "../../../../sharedComponents/Button/Button";


const TasksHeader = ({handleOnChangeSearch,handleToggleSortTasks,isAscSortButton,setIsShow} : {handleOnChangeSearch:(e: React.ChangeEvent<HTMLInputElement>)  => void,handleToggleSortTasks: () => void,isAscSortButton:boolean, setIsShow : (isShow:boolean) => void}) => {
  return (
    <S.TasksHeader>
      <SearchForm handleOnChangeSearch={handleOnChangeSearch} />
      <Button type="button" onClick={handleToggleSortTasks} bgColor={"yellow"} size={'small'}>
        {isAscSortButton ? "Sort A-Z" : "Sort Z-A"}
      </Button>
      <Button onClick={() => setIsShow(true)} bgColor={"purple"} size={'small'} title="Add task">
        +
      </Button>
    </S.TasksHeader>
  );
};

export default TasksHeader;
