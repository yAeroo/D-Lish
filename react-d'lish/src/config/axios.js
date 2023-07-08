import axios from "axios";

// Configuración del cliente 
const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // Se envian antes de la petición
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
})

export default clienteAxios;