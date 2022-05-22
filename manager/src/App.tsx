import { useState } from "react";
import * as S from "./App.styles";
import "./App.css";
import Button from "./sharedComponents/Button";

function App() {
  const [newColor, setNewColor] = useState(false);
  const [size, setSize] = useState({ height: 50, width: 50 });
  const [bgColor, setBgColor] = useState("blue");

  const changeSizeHandler = (flag: "big" | "small") => {
    if (flag === "big") {
      setSize((prevState) => ({
        height: prevState.height * 2,
        width: prevState.width * 2,
      }));
    } else {
      setSize({ height: size.height / 2, width: size.width / 2 });
    }
  };
  const changeBgCOlorHandler = (bg: string) => {
    setBgColor(bg);
  };

  return (
    <>
      <S.Button newColor={newColor} onClick={() => setNewColor(!newColor)}>
        click to change color
      </S.Button>
      <S.MainTitle newColor={newColor}>Shalom Ebaboo</S.MainTitle>
      <Button
        onClick={() => changeSizeHandler("big")}
        children="Change size * 2"
        width="100px"
      />
      <Button
        onClick={() => changeSizeHandler("small")}
        children="Small / 2"
        width="100px"
      />
      <Button
        bg="pink"
        color="black"
        onClick={() => changeBgCOlorHandler("pink")}
        width="200px"
        children="Chnage color"
      />
      <Button
        onClick={() => changeBgCOlorHandler("red")}
        bg="red"
        color="black"
        width="200px"
        children="red"
      />
    
      <Button
        onClick={() => changeBgCOlorHandler("blue")}
        bg="Blue"
        color="white"
        width="200px"
        children="Blue"
      />
      <Button
        onClick={() => changeBgCOlorHandler("green")}
        bg="green"
        color="white"
        width="200px"
        children="green"
      />

      <S.Cube size={size} bgColor={bgColor} />
    </>
  );
}

export default App;
