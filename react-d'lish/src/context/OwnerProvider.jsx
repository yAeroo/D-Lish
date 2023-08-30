import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';
// COMPONENTES DE CONTENIDO VARIABLE
import useSWR from 'swr';

// Definimos nuestro contexto de cafeterias
const OwnerContext = createContext();

// Proveedor de datos, quien va a servir la información de las cafeterias
const OwnerProvider = ({ children }) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    const idOwner = localStorage.getItem('USER_ID');
    // Definición de Ordenes
    const [contenido, setContenido] = useState([]);
    const [platillos, setPlatillos] = useState([]);
    const [boolean, setBoolean] = useState(false);
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
            setBoolean(true);
        } catch (error) {
            // console.log(error);
        }
    }

    const obtenerPedidos = async () => {
        try {
            const { data } = await clienteAxios(`/api/owner/${idOwner}/ordenes`, {
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
            const { data } = await clienteAxios(`/api/owner/${idOwner}/pedidos`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPlatillos(data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    const hadleClickOcultar = async (type, id) => {
        try {
            await clienteAxios.put(`/api/${type}/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
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
    }, [contenido, boolean])


    return (
        // Se pasan los datos al global
        <OwnerContext.Provider value={{
            contenido,
            pedidos,
            platillos,
            hadleClickOcultar
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