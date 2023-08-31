import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';
// COMPONENTES DE CONTENIDO VARIABLE
import useSWR from 'swr';

// Definimos nuestro contexto de cafeterias
const OwnerContext = createContext();

// Proveedor de datos, quien va a servir la información de las cafeterias
const OwnerProvider = ({ children }) => {
    // Definición de Ordenes
    const [contenido, setContenido] = useState([]);
    const [platillos, setPlatillos] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    // Función asincrona que llama los datos de la cafetería en base al ID del Usuario
    const obtenerOwner = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
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

    // Obtener todos los pedidos de los usuarios a la cafetería
    const obtenerPedidos = async () => {
        const idOwner = localStorage.getItem('CAFE_ID');
        const token = localStorage.getItem('AUTH_TOKEN');
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

    // Obtener todos los platillos 
    const obtenerPlatillos = async () => {
        const idOwner = localStorage.getItem('CAFE_ID');
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const { data } = await clienteAxios(`/api/owner/${idOwner}/pedidos`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPlatillos(data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Registrar o añadir componentes de platillos
    const addProduct = async (type, datos, NotiError) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        const datas = { ...datos, idOwner };
        console.log(datas);

        try {
            const { data } = await clienteAxios.post(`/api/${type}`, datas, {
                headers: {
                    Authorization: `Bearer ${token}` // Token obligatorio para validación de datos
                }
            });
            console.log('Exito', data);
            resetState();
            NotiExito();
        } catch (error) {
            NotiError();
            // setError(""); setAErrors([]);
            if (error?.response?.data?.errors && Object.keys(error.response.data.errors).length > 0) {
                let Errores = Object.values(error?.response?.data?.errors);
                setAErrors(Errores);
            } else {
                setError(error.response.data.message);
            }
            console.error('Error', error);
        }
    }

    // Función para resetear todo
    const resetState = () => {
        setError(""); setAErrors([]);
        const pwInput = {
            oldPassword: document.getElementById('oldPassword'),
            newPassword: document.getElementById('newPassword'),
            newPassswordConfirmation: document.getElementById('newPassswordConfirmation')
        }

        // Limpiando inputs
        pwInput.oldPassword.value = ''; pwInput.newPassword.value = ''; pwInput.newPassswordConfirmation.value = '';
    }

    // Cambiar estado de disponibilidad de un componente/producto
    const hadleClickVisibility = async (type, id) => {
        const token = localStorage.getItem('AUTH_TOKEN');
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
        obtenerPedidos();
        obtenerPlatillos();
    }, [])

    return (
        // Se pasan los datos al global
        <OwnerContext.Provider value={{
            obtenerPedidos,
            obtenerOwner,
            contenido,
            pedidos,
            platillos,
            hadleClickVisibility,
            addProduct,
            obtenerPlatillos
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