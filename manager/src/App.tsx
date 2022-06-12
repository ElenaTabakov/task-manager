import Tasks from "./Screens/Tasks/Tasks";


function App() {
  // const [tasksList, setTasksList] = useState<Task[]>(tasks);
  // console.log(tasksList);


  return (
    <>
      {/* <Sc.InputWrapper>
        <Form setTasksList={setTasksList} />
      </Sc.InputWrapper>
      <CurrentTasks tasksList={tasksList} setTasksList={setTasksList}/> */}
      <Tasks/>
    </>
  );
}

export default App;
