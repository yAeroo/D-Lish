import { useContext } from 'react';
import FinalDishesContext from '../context/FinalDishesProvider';

// "use" react agiliza el código
const useFinalDishes = () => {
    return useContext(FinalDishesContext);
}

export default useFinalDishes;