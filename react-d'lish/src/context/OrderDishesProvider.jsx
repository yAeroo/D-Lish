import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Definimos nuestro contexto de cafeterias
const OrderDishesContext = createContext();

// Proovedor de datos, quien va a servir la información de los platillos
const OrderDishesProvider = ({ children }) => {
    const [OrderDishes, setOrderDishes] = useState([]);

    // Función asincrona para llamar los datos
    const obtenerOrderDishes = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:8000/api/order_dishes');
            setOrderDishes(data.data);
            localStorage.setItem('order_dishes', 'Test');
        } catch (error) {
            console.log(error);
        }
    }

    // Manda a llamar al cargar el componente
    // useEffect(() => {
    //     obtenerOrderDishes();
    // }, [])

    return (
        // Se pasan los datos al global
        <OrderDishesContext.Provider value={{
            OrderDishes
        }}>
            {children}
        </OrderDishesContext.Provider>
    )
}

// Exportamos
export {
    OrderDishesProvider
}

export default OrderDishesContext;