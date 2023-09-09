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

import { useTranslation } from "react-i18next";


function DeliveryModeAdmin() {
      // Obtener todos los pedidos de los usuarios a la cafetería
      const idOwner = localStorage.getItem('CAFE_ID');
      const token = localStorage.getItem('AUTH_TOKEN');
      const { t } = useTranslation();

      const fetcher = () => clienteAxios(`/api/owner/${idOwner}/pedidos`, {
            headers: {
                  Authorization: `Bearer ${token}`
            }
      }).then(datos => datos.data);

      const { data, error, isLoading } = useSWR(`/api/owner/${idOwner}/pedidos`, fetcher, {
            refreshInterval: 5000
      });

      console.log(data);

      // CARGANDO ===== 
      if (isLoading) return <Spinner />

      return (
            <div className=' mb-10 md:ml-[10rem] ml-[1rem] min-h-[calc(100vh-200px)] animate-fade animate-duration-500"'>
                  <h1 className='text-5xl md:text-6xl pt-14 text-center font-bold text-primary'>{t("admin.deliv-title")}</h1>
                  {data?.data.length ?
                        data?.data.map((platillo, id) => {
                              // Encabezado de la tabla para cada producto
                              return <div key={id} className='pb-6'>
                                    <HeaderOrder platillo={platillo.name} idPlatillo={platillo.id} />
                                    <OrderProps idPlatillo={platillo.id} />
                                    <hr className='bg-primary h-1 w-1/3 m-auto' />
                              </div>
                        }) : (
                              <div className='pb-6 md:min-h-[calc(100vh-469px)] min-h-[calc(100vh-458px)] flex flex-col items-center gap-7 text-gray-700 mt-10 md:mt-24'>
                                    <VscEmptyWindow className='md:text-8xl text-6xl ' />
                                    <p className='text-lg md:text-2xl text-center'>{t("admin.deliv-no-menu-1")}<br /> {t("admin.deliv-no-menu-2")}</p>
                                    <Link to="/admin/products" className='btn btn-success' >
                                          {t("admin.deliv-no-menu-btn")}
                                    </Link>
                              </div>)
                  }
            </div>

      )
}

export default DeliveryModeAdmin
