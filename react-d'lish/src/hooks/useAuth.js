import { useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import clienteAxios from "../config/axios";

export const useAuth = ({ middleware, url }) => {

    // Obtenemos token del localStorage
    const token = localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate();

    // Función para revalidar token de usuario
    const { data: user, error, mutate } = useSWR('/api/user', () =>
        // Callback llama en automatico a la URL
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.data)
            .catch(error => {
                throw Error(error?.response?.data?.errors)
            })
    );

    // Función async await
    const login = async (datos, setErrores) => {

        try {
            const { data } = await clienteAxios.post('/api/login', datos);
            // Guardar token de auth en localstorage
            localStorage.setItem('AUTH_TOKEN', data.token);
            // Si todo esta bien
            setErrores([]);
            // Función para forzar revalidación
            await mutate();
        } catch (error) {
            // Errores dados por Axios
            setErrores(Object.values(error.response.data.errors));
        }

    }

    const registro = () => {

    }

    const logout = () => {

    }

    console.log(user);
    console.log(error);

    console.log(middleware);
    console.log(url);

    // UseEffect atento a User ó Error
    useEffect(() => {
        if (middleware === 'guest' && url && user) {
            navigate(url);
        }
        // Condicional que válida la sesión
        if (middleware === 'auth' && error) {
            navigate('/auth/login')
        }
    }, [user, error])

    return {
        login, registro, logout, user, error
    }
}