import { createContext, useState } from "react";

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
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
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export { OrdersProvider };
export default OrdersContext;
