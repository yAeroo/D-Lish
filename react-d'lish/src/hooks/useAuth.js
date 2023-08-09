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
            navigate('/');
        } catch (error) {
            // Errores dados por Axios
            setErrores(Object.values(error.response.data.errors));
        }
    }

    const registro = async (datos, setErrores) => {
        try {
            const { data } = await clienteAxios.post('/api/registro', datos);
            localStorage.setItem('AUTH_TOKEN', data.token)
            // Limpiar State
            setErrores([]);
            // Revalidar token de usuario
            await mutate();
        } catch (error) {
            // Errores dados por Axios
            setErrores(Object.values(error.response.data.errors));
        }
    }

    const logout = async () => {
        try {
            // Petición tipo post: hacía la ruta... | con un objeto nulo
            await clienteAxios.post('/api/logout', null, {
                // token Sactum, conocer que usuario remueve su token
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('AUTH_TOKEN');
            // Cambiar el valor de la caché de la sesión
            await mutate(undefined);
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    console.log(user);
    console.log(url);

    // UseEffect atento a User ó Error
    useEffect(() => {
        if (middleware === 'guest' && url && user) {
            navigate(url);
        }
        // Condicional que válida la sesión
        if (middleware === 'auth' && error) {
            navigate('/homepage')
        }
    }, [user, error])

    return {
        login, registro, logout, user, error
    }
}