import { useContext } from "react";
import UserContext from '../context/UserProvider';

const useUser = () => {
    // Extraemos los valores en el context
    return useContext(UserContext)
}

export default useUser;

