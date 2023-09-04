// Componentes
import HeaderOrder from '../../components/Admin/HeaderOrder';
import Spinner from '../../components/Spinner';
import OrderProps from '../../components/Admin/OrderProps';
// Iconos
import { VscEmptyWindow } from 'react-icons/vsc';
// Contenido variable
import clienteAxios from '../../config/axios';
import useSWR from 'swr';

// Css
import "../../css/productsTable.css";
import { Link } from 'react-router-dom';


function DeliveryModeAdmin() {
      // Obtener todos los pedidos de los usuarios a la cafetería
      const idOwner = localStorage.getItem('CAFE_ID');
      const token = localStorage.getItem('AUTH_TOKEN');
      const fetcher = clienteAxios(`/api/owner/${idOwner}/pedidos`, {
            headers: {
                  Authorization: `Bearer ${token}`
            }
      }).then(datos => datos.data);

      const { data, error, isLoading } = useSWR(`/api/owner/${idOwner}/pedidos`, fetcher, {
            refreshInterval: 5000
      });

      // CARGANDO ===== 
      if (isLoading) return <Spinner />

      return (
            <div className=' mb-10 ml-[1rem] h-[100%] animate-fade animate-duration-500"'>
                  <h1 className='text-5xl md:text-6xl pt-14 text-center font-bold text-primary'>Pedidos del día</h1>
                  {
                        data?.platillos.lenght ?
                              data?.platillos.map((platillo, id) => {
                                    // Encabezado de la tabla para cada producto
                                    return <div key={id} className='pb-6'>
                                          <HeaderOrder platillo={platillo.name} idPlatillo={platillo.id} />
                                          <OrderProps idPlatillo={platillo.id} />
                                          <hr className='bg-primary h-1 w-1/3 m-auto' />
                                    </div>
                              }) : (
                                    <div className='pb-6 md:min-h-[calc(100vh-469px)] min-h-[calc(100vh-458px)] flex flex-col items-center gap-7 text-gray-700 mt-10 md:mt-24'>
                                          <VscEmptyWindow className='md:text-8xl text-6xl ' />
                                          <p className='text-lg md:text-2xl text-center'>No hay pedidos o un menú disponible.<br /> Gestiona pedidos y agrega más productos para tus clientes.</p>
                                          <Link to="/admin/products" className='btn btn-success' >
                                                Agrega Productos
                                          </Link>
                                    </div>)}
            </div>

      )
}

export default DeliveryModeAdmin
