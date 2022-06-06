import { useState } from "react";
import * as Sc from "../../FormElements/Input/Input.styles";
import "../../../App.css";
import CurrentTasks from "../../List/Tasks";
import Form from '../../FormElements/Form'

export interface Task {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  date: Date;
}

const tasks: Task[] = [
  {
    id: "m1",
    title: "Daily Status Too",
    description:
      "Finest fish and veggies  german specialty! American, raw, meaty. Healthy...and green...Finest fish and veggies  german specialty!Finest fish and veggies  german specialty!",
    date: new Date("2019-01-16"),
  },
  {
    id: "m2",
    title: "call",
    description: "A german specialty!",
    date: new Date("2019-01-16"),
  },
  {
    id: "m3",
    title: "BB",
    description: "American, raw, meaty",
    date: new Date("2019-01-16"),
  },
  {
    id: "m4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    date: new Date("2019-01-16"),
  },
];

const TaskManager = () => {
  const [tasksList, setTasksList] = useState<Task[]>(tasks);

  return (
    // console.log(tasksList);
    <>
      <Sc.InputWrapper>
        <Form setTasksList={setTasksList} />
      </Sc.InputWrapper>
      <CurrentTasks tasksList={tasksList} setTasksList={setTasksList} />
    </>
  );
};

export default TaskManager;
