import Tasks from "../Screens/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import  *  as S from "../Screens/Pages.styles";


export default function TasksList() {
    return (
      <S.PageContainer>
        <h2>Tasks</h2>
        <Navigate to="/" />
        <Tasks/>
      </S.PageContainer>
    );
 }