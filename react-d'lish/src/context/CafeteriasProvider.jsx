import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

// Definimos nuestro contexto de cafeterias
const CafeteriasContext = createContext();

// Proveedor de datos, quien va a servir la información de las cafeterias
const CafeteriasProvider = ({ children }) => {
    const [cafeterias, setCafeterias] = useState([]);
    const [contenidoCafeteria, setContenidoCafeteria] = useState([]);

    // Función asincrona que llama los datos
    const obtenerCafeterias = async () => {
        try {
            const { data } = await clienteAxios('/api/cafeterias');
            setCafeterias(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Función asincrona que llama los datos
    const obtenerContenidoCafeteria = async (cafeteriaId) => {
        try {
            const { data } = await clienteAxios(`/api/cafeteria/${cafeteriaId}/content`);
            const cafeteria = data.data[0];

            // Guardar en localStorage
            localStorage.setItem('contenidoCafeteria', JSON.stringify(cafeteria));
            setContenidoCafeteria(cafeteria);
        } catch (error) {
            console.log(error);
        }
    }

    const limpiarCafeteria = () => {
        setContenidoCafeteria([]);
    }

    // Manda a llamar al cargar el componente
    useEffect(() => {
        obtenerCafeterias();
    }, [])

    return (
        // Se pasan los datos al global
        <CafeteriasContext.Provider value={{
            cafeterias,
            obtenerContenidoCafeteria,
            contenidoCafeteria,
            limpiarCafeteria
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