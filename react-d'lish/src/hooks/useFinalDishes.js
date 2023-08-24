import { useContext } from 'react';
import OrderDishesContext from '../context/OrderDishesProvider';

// "use" react agiliza el código
const useOrderDishes = () => {
    return useContext(OrderDishesContext);
}

export default useOrderDishes;