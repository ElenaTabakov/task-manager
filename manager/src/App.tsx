import { ChangeEvent, useState } from "react";
import * as Sc from "./sharedComponents/FormElements/Input/Input.styles";
import "./App.css";
import CurrentTasks from "./sharedComponents/List/List";
import Form from "./sharedComponents/FormElements/Form";

export interface Task {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  date: string;
}

const tasks: Task[] = [
  {
    id: "m1",
    title: "Daily Status Too",
    description:
      "Finest fish and veggies  german specialty! American, raw, meaty. Healthy...and green...Finest fish and veggies  german specialty!Finest fish and veggies  german specialty!",
    date: "13.06.2022",
  },
  {
    id: "m2",
    title: "call",
    description: "A german specialty!",
    date: "13.06.2022",
  },
  {
    id: "m3",
    title: "BB",
    description: "American, raw, meaty",
    date: "13.06.2022",
  },
  {
    id: "m4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    date: "13.06.2022",
  },
];

function App() {
  const [tasksList, setTasksList] = useState<Task[]>(tasks);
  // console.log(tasksList);

  return (
    <>
      <Sc.InputWrapper>
        <Form setTasksList={setTasksList} />
      </Sc.InputWrapper>
      <CurrentTasks tasksList={tasksList} setTasksList={setTasksList}/>
    </>
  );
}

export default App;
