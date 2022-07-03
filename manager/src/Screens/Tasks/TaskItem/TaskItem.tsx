import { useState } from "react";
import { Task } from "../Tasks";
import { RootState } from "../../../store/store";
import { useSelector, useDispatch } from "react-redux"; 
import Button from "../../../sharedComponents/Button/Button";
import Circle from "../../../sharedComponents/CircleTitle/CircleTitle";
import EditTaskForm from "../../../sharedComponents/FormElements/EditTaskForm";
import * as S from "./TaskItem.styles";
import Form from "../../../sharedComponents/FormElements/AddEditTaskForm";

interface TaskItemProps {
  task: Task;
  className?: string;
  onDelete: (id:string) => void;
  // tasksList?: Task[];
  // setTasksList?: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({
  task: { id, title, description, date },
  task: Task,
  className,
  onDelete,
}: TaskItemProps ) => {
 
const [visibleEdirForm,setVisibleEditForm] = useState<boolean>(false);  
const tasks = useSelector((state: RootState) => state.taskSlice.tasks);


  return (
    <S.ListItem id={id} className={className}>
      <Circle circleContent={title} />
      <S.ListItemContent>
        {/* {visibleEdirForm {
          return {<Input value={title} name="new-title"/>  <Input value={description} name="new-description"/>}

        } } */}
        <S.ListName>{title}</S.ListName>
        <S.ListDescription>{description}</S.ListDescription>
        <S.ListDate>{date.toLocaleString()}</S.ListDate>
      </S.ListItemContent>
      <Button size="small" onClick={() => onDelete(id)} >
        x
      </Button>
      <Button size='small' onClick={() => setVisibleEditForm(!visibleEdirForm)}> {(visibleEdirForm) ? 'Close Edit Form' : 'Edit Task'} </Button>
      <Form isEdit isShow={visibleEdirForm} setIsShow={setVisibleEditForm} task={task}/>
   
    </S.ListItem>
  );
};

export default TaskItem;


