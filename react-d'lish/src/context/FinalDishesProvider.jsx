import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Definimos nuestro contexto de cafeterias
const FinalDishesContext = createContext();

// Proovedor de datos, quien va a servir la información de los platillos
const FinalDishesProvider = ({ children }) => {
    const [finalDishes, setFinalDishes] = useState([]);

    // Función asincrona para llamar los datos
    const obtenerFinalDishes = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:8000/api/final_dishes');
            setFinalDishes(data.data);
            localStorage.setItem('FINAL_DISHES', 'Test');
        } catch (error) {
            console.log(error);
        }
    }

    // Manda a llamar al cargar el componente
    useEffect(() => {
        obtenerFinalDishes();
    }, [])

    return (
        // Se pasan los datos al global
        <FinalDishesContext.Provider value={{
            finalDishes
        }}>
            {children}
        </FinalDishesContext.Provider>
    )
}

// Exportamos
export {
    FinalDishesProvider
}

export default FinalDishesContext;