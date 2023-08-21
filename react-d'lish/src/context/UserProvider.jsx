import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

// Se define el context
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({});

    return (
        <UserContext.Provider value={{
            setUsuario
        }}>
            {children}
        </UserContext.Provider>
    );
}

export {
    UserProvider
}

export default UserContext;