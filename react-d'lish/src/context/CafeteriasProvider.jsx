import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Definimos nuestro contexto de cafeterias
const CafeteriasContext = createContext();

// Proveedor de datos, quien va a servir la información de las cafeterias
const CafeteriasProvider = ({ children }) => {
    const [cafeterias, setCafeterias] = useState([]);

    // Función asincrona que llama los datos
    const obtenerCafeterias = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:8000/api/cafeterias');
            setCafeterias(data.data);
        } catch (error) {
            console.log(error);
        }

    }

    // Manda a llamar al cargar el componente
    useEffect(() => {
        obtenerCafeterias();
    }, [])

    return (
        // Se pasan los datos al global
        <CafeteriasContext.Provider value={{
            cafeterias
        }}>
            {children}
        </CafeteriasContext.Provider>
    )
}

// Exportamos
export {
    CafeteriasProvider
}

export default CafeteriasContext;