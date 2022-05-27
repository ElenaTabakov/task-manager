import { useState } from "react";
import * as S from "./App.styles";
import "./App.css";
import Button from "./sharedComponents/Button/Button";
import CurrentTasks from "./sharedComponents/List/List";
import Form from "./sharedComponents/Form/Form";
import FormAddItem from "./sharedComponents/Form/Form";

function App() {
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
    <FormAddItem/>
    <CurrentTasks/>

      {/* <S.Cube size={size} bgColor={bgColor} /> */}
    </>
  );
}

export default App;
