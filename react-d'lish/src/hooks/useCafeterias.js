import { useContext } from 'react';
import CafeteriasContext from '../context/CafeteriasProvider';

// "use" react agiliza el código
const useCafeterias = () => {
    return useContext(CafeteriasContext);
}

export default useCafeterias;