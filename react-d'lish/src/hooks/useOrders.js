import { useContext } from 'react';
import OrdersContext from '../context/OrdersProvider';

// "use" react agiliza el código
const useOrders = () => {
    return useContext(OrdersContext);
}

export default useOrders;