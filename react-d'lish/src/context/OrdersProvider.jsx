import { createContext, useState } from "react";
import clienteAxios from "../config/axios";

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
    // Obtenemos token del localStorage
    const token = localStorage.getItem('AUTH_TOKEN');

    // State - contenido a variar
    const [ordenComplete, setOrdenComplete] = useState(false);
    const [producto, setProducto] = useState({});
    const [orden, setOrden] = useState({});


    // Saber si el objeto esta nulo o no
    const comprobarOrdenCompleta = (orden) => {
        const valores = Object.values(orden);
        const bool = valores.every(valor => valor !== null);
        setOrdenComplete(bool); // Verifica si todos los valores son diferentes de null
    }

    // Sacar elementos de un objeto
    const handleAgregarOrden = (id, type) => {
        orden[type] = id;
        setOrden(orden);
    };

    const handleRemoverOrden = () => {
        setOrden({ userId: null });
    };

    // Función asíncrona para registrar una Orden
    const registrarOrden = async (datos, setErrores, notiError, redirigir) => {
        // Formateo de Objeto para la API
        const { userName, ...data } = datos;
        // Si no selecciono bebida marcar como nulo
        if (data.drink === 0) data.drink = null;

        // Try Catch en donde se intenta mandar los datos a la API con el Tonken
        try {
            setErrores([]);
            const { res } = await clienteAxios.post('/api/orden', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Redirigir
            redirigir();
        } catch (error) {
            let Errores = Object.values(error.response.data.errors);
            setErrores(Errores);
            // Evalua si hay errores o no para notificar
            Errores ? notiError() : null;
        }
    }

    return (
        <OrdersContext.Provider
            value={{
                producto,
                orden,
                setOrden,
                handleAgregarOrden,
                ordenComplete,
                comprobarOrdenCompleta,
                handleRemoverOrden,
                registrarOrden,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export { OrdersProvider };

export default OrdersContext;
