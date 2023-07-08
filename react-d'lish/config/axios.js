import axios from "axios";

// Configuración del cliente 
const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_UL,
})

export default clienteAxios;