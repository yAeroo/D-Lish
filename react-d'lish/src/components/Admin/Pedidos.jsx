// COMPONENTES DE CONTENIDO VARIABLE
import useSWR from 'swr';
import clienteAxios from '../../../src/config/axios';

export default function Pedidos() {
    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => clienteAxios('/api/owner/1/pedidos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const { data, error, isLoading } = useSWR('/api/cafeteria/1/ordenes', fetcher);
    console.log(data?.data);

    return (
        <div >
            <h1 className='text-xl text-black flex items-center w-[95%] justify-center'>Hola</h1>
        </div>
    )
}
