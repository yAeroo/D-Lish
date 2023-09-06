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
    const login = async (datos, setErrores, notiError, load) => {
        try {
            const { data } = await clienteAxios.post('/api/login', datos);
            // Guardar token de auth en localstorage
            localStorage.setItem('AUTH_TOKEN', data.token);
            // Si es Admin asignamos el ID de su cafeteria
            if (data.user.type === "owner") localStorage.setItem('CAFE_ID', data.user.id);
            // Si todo esta bien
            load();
            setErrores([]);
            // Función para forzar revalidación
            await mutate();
        } catch (error) {
            // Errores dados por Axios
            let Errores = Object.values(error?.response?.data?.errors);
            // Define errores para el frontend
            setErrores(Errores);
            // Evalua si hay errores o no para notificar
            Errores ? notiError() : null;
        }
    }

    const registro = async (datos, setErrores, notiError, load) => {
        try {
            const { data } = await clienteAxios.post('/api/registro', datos);
            localStorage.setItem('AUTH_TOKEN', data.token)
            // Limpiar State
            setErrores([]);
            load();
            // Revalidar token de usuario
            await mutate();
        } catch (error) {
            // Errores dados por Axios
            let Errores = Object.values(error?.response?.data?.errors);
            // Define errores para el frontend
            setErrores(Errores);
            // Evalua si hay errores o no para notificar
            Errores ? notiError() : null;
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
            localStorage.removeItem('CAFE_ID');
            // Cambiar el valor de la caché de la sesión
            await mutate(undefined);
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    // UseEffect atento a User ó Error
    useEffect(() => {
        // Acceso para usuarios normales
        if (middleware === 'guest' && url && user) {
            navigate(url);
        }
        // Acceso para admin autenticados
        if (middleware === 'guest' && user && user.type == 'owner') {
            navigate('/admin')
        }
        // Redirecciónr para usuario que intente acceder a vista admin
        if (middleware === 'owner' && user && user.type !== 'owner') {
            navigate('/')
        }
        // Redirección para admin que intente acceder a vista de usuario
        if (middleware === 'auth' && user && user.type !== 'user') {
            navigate('/admin')
        }
        // Condicional que válida la sesión, si no retorna a hompeage
        if (middleware === 'auth' && error) {
            navigate('/homepage')
        }
    }, [user, error])

    return {
        login, registro, logout, user, error
    }
}
