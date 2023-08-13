import { createContext, useContext, useState } from "react";

// Se define el context
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // No hay un usario inicialmente

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}