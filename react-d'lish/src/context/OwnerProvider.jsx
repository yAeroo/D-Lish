import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';
// COMPONENTES DE CONTENIDO VARIABLE
import useSWR from 'swr';

// Definimos nuestro contexto de cafeterias
const OwnerContext = createContext();

// Proveedor de datos, quien va a servir la información de las cafeterias
const OwnerProvider = ({ children }) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    const idOwner = localStorage.getItem('USER_ID')
    // Definición de Ordenes
    const [contenido, setContenido] = useState([]);
    const [platillos, setPlatillos] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    // Función asincrona que llama los datos
    const obtenerOwner = async () => {
        try {
            const { data } = await clienteAxios(`/api/owner/${idOwner}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setContenido(data?.data);
        } catch (error) {
            // console.log(error);
        }
    }

    const obtenerPedidos = async () => {
        try {
            const { data } = await clienteAxios(`/api/owner/${idOwner}/pedidos`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPedidos(data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerPlatillos = async () => {
        try {
            const { data } = await clienteAxios(`/api/owner/${idOwner}/platillos`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPlatillos(data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Manda a llamar al cargar el componente
    useEffect(() => {
        obtenerOwner();
    }, [])

    // Manda a llamar al tener la cafeteria
    useEffect(() => {
        obtenerPedidos();
        obtenerPlatillos();
    }, [contenido])


    return (
        // Se pasan los datos al global
        <OwnerContext.Provider value={{
            contenido,
            pedidos,
            platillos
        }}>
            {children}
        </OwnerContext.Provider>
    )
}

// Exportamos
export {
    OwnerProvider
}

export default OwnerContext;