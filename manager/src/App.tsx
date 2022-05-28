import { ChangeEvent, useState } from "react";
import * as S from "./App.styles";
import * as Sc from "./sharedComponents/FormElements/Input.styles";
import "./App.css";
import Button from "./sharedComponents/Button/Button";
import CurrentTasks from "./sharedComponents/List/List";
import Input from "./sharedComponents/FormElements/Input";

function App() {

  const [errorMessage, setErrorMessage] = useState({firstName: '', lastName: ''});
  const [inputValue, setInputValue] = useState({firstName: '', lastName: ''});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setInputValue((prevState) => {
      return {...prevState, [inputName]: value  };
    });

    setErrorMessage((prevState) => {
      return {...prevState, [inputName]: ''};
    });
    
    if(value.length === 0){
      setErrorMessage((prevState) => {
        return{...prevState, [inputName] : 'Enter your ' +  inputName}
      });
    }
    // if (value.length < 5){
    //   setErrorMessage((prevState) => {
    //     return{...prevState, [inputName] : 'min 5'}
    //   });
    // }
    
  }
   // const [newColor, setNewColor] = useState(false);
  // const [size, setSize] = useState({ height: 50, width: 50 });
  // const [bgColor, setBgColor] = useState("blue");

  // const changeSizeHandler = (flag: "big" | "small") => {
  //   if (flag === "big") {
  //     setSize((prevState) => ({
  //       height: prevState.height * 2,
  //       width: prevState.width * 2,
  //     }));
  //   } else {
  //     setSize({ height: size.height / 2, width: size.width / 2 });
  //   }
  // };
  // const changeBgCOlorHandler = (bg: string) => {
  //   setBgColor(bg);
  // };

  return (
    <>
      <Sc.InputWrapper>
        <Input name="firstName" min="5" onChange={handleInputChange} error={errorMessage.firstName} value={inputValue.firstName}/>
        <Input name="lastName" min="5" onChange={handleInputChange} error={errorMessage.lastName} value={inputValue.lastName}/>
        <Button>Add Task</Button>
      </Sc.InputWrapper>
      <CurrentTasks />

      {/* <S.Cube size={size} bgColor={bgColor} /> */}
    </>
  );
}

export default App;
