import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuth = () => {
    
    const {users,isAuth} = useSelector((state: RootState) => state.userSlice);

    return{
        isAuth,
        users
    }
}