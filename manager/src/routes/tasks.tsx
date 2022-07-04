import Tasks from "../Screens/Tasks/Tasks";
import  *  as S from "../Screens/Pages.styles";


export default function TasksList() {
    return (
      <S.PageContainer>
        <h2>Tasks</h2>

        <Tasks/>
      </S.PageContainer>
    );
 }