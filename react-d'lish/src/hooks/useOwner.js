import { useContext } from 'react';
import OwnerContext from '../context/OwnerProvider';

// "use" react agiliza el código
const useOwner = () => {
    return useContext(OwnerContext);
}

export default useOwner;