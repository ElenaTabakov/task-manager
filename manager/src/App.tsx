import {useState} from 'react';
import * as S from './App.styles'
import './App.css';



function App() {

  const [newColor, setNewColor] = useState(false);
  const [curHeight, setHeight] = useState(false);
 
  return (
    <>
     <S.Button newColor={newColor} onClick={() => setNewColor(!newColor) }>click to change color</S.Button>
     <S.MainTitle newColor={newColor} >Shalom Ebaboo</S.MainTitle> 

     <S.Cube curHeight={curHeight} onClick={() => setHeight(!curHeight) }> </S.Cube>  
    </>
  );
}

export default App;
