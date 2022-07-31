import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuth = () => {
    
    const {email,  id} = useSelector((state: RootState) => state.userSlice);

    return{
        isAuth: !!email,
        email,
        id
    }
}