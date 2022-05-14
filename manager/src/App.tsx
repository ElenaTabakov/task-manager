import {useState} from 'react';
import * as S from './App.styles'
import './App.css';



function App() {

  const [newColor, setNewColor] = useState(false);
  const [size, setSize] = useState({height : 50 , width : 50});
  const [bgColor, setBgColor] = useState('blue');

  const changeSizeHandler = (flag: 'big' | 'small') => {
  if( flag === 'big'){
    setSize((prevState) => ({height: prevState.height*2, width : prevState.width*2}) );
  } else{
     setSize({height : size.height/2 , width : size.width/2});
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
