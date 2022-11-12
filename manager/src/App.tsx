import { Link } from "react-router-dom";
import  *  as S from "./Screens/Pages.styles";
// import GlobalStyles from 'styles/global'

function App() {


  return (
    <S.PageContainer>
        <Link to="/">Home</Link> | {" "}
        <Link to="/login">Login</Link> | {" "}
        <Link to="/tasks">Tasks</Link>   
        <GlobalStyles />
    </S.PageContainer>
  );
}

export default App;
