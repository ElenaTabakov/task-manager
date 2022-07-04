import { Link } from "react-router-dom";
import  *  as S from "./Screens/Pages.styles";

function App() {


  return (
    <S.PageContainer>
        <Link to="/">Home</Link> | {" "}
        <Link to="/login">Login</Link> | {" "}
        <Link to="/tasks">Tasks</Link>   
    </S.PageContainer>
  );
}

export default App;
