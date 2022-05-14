import {useState} from 'react';
import * as S from './App.styles'
import './App.css';



function App() {

  const [newColor, setNewColor] = useState(false);
  const [size, setSize] = useState(50);
  const [bgColor, setBgColor] = useState('blue');

  const changeSizeHandler = (flag: 'big' | 'small') => {
  if( flag === 'big'){
    setSize(size*2);
  } else {
    setSize(size/2);
  }
     
  }

  const changeBgCOlorHandler = (bg:string) => {
    setBgColor(bg);
}
 
  return (
    <>
     <S.Button newColor={newColor} onClick={() => setNewColor(!newColor) }>click to change color</S.Button>
     <S.MainTitle newColor={newColor} >Shalom Ebaboo</S.MainTitle> 

     <button  onClick={() => changeBgCOlorHandler('red')} >Red</button>  <button onClick={() => changeBgCOlorHandler('blue')}>Blue</button><button onClick={() => changeBgCOlorHandler('green')}>Green</button>
     <button  onClick={() => changeSizeHandler('big')} >Change size</button>  <button onClick={() => changeSizeHandler('small')}>Small</button>
     <S.Cube size={size} bgColor={bgColor}/>  
    </>
  );
}

export default App;
