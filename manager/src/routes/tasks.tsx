import Tasks from "../Screens/Tasks/Tasks";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import  *  as S from "../Screens/Pages.styles";


export default function TasksList() {

  const user = useSelector((state: RootState) => state.userSlice);
  console.log(user);

    return (
      <S.PageContainer>
        <h2>Tasks</h2>
         {/* <Navigate to="/" /> */}
        <Tasks/>
      </S.PageContainer>
    );
 }