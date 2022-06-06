import TaskManager from "./sharedComponents/Screens/TaskManager/TaskManager";


function App() {
  // const [tasksList, setTasksList] = useState<Task[]>(tasks);
  // console.log(tasksList);


  return (
    <>
      {/* <Sc.InputWrapper>
        <Form setTasksList={setTasksList} />
      </Sc.InputWrapper>
      <CurrentTasks tasksList={tasksList} setTasksList={setTasksList}/> */}
      <TaskManager />
    </>
  );
}

export default App;
