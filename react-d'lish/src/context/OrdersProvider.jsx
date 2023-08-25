import { createContext, useState } from "react";
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
    // State - contenido a variar
    // const [categorias, setCategorias] = useState([]);
    // const [categoriaActual, setCategoriaActual] = useState({});
    // const [modal, setModal] = useState(false);
    const [ordenComplete, setOrdenComplete] = useState(false);
    const [producto, setProducto] = useState({});
    const [orden, setOrden] = useState({});
    // const [total, setTotal] = useState(0);

    // Función para cada actualización de Orden
    // useEffect(() => {
    //     const nuevoTotal = Orden.reduce(
    //         (total, producto) => producto.precio * producto.cantidad + total,
    //         0
    //     );
    //     setTotal(nuevoTotal);
    // }, [Orden]);

    // const obtenerComponentesDish = async () => {
    //     try {
    //         const { data } = await clienteAxios(`/api/categorias`);
    //         setCategorias(data.data);
    //         setCategoriaActual(data.data[0]);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     obtenerCategorias();
    // }, []);

    // // Convención - evento
    // const handleClickCategoria = (id) => {
    //     const categoria = categorias.filter(
    //         (categoria) => categoria.id === id
    //     )[0];

    //     // Establecer nueva categoría con función modificadora
    //     setCategoriaActual(categoria);
    // };

    // const handleClickModal = () => {
    //     // Toggle de boleano
    //     setModal(!modal);
    // };

    // Saber si el objeto esta nulo o no
    const comprobarOrdenCompleta = (objeto) => {
        const valores = Object.values(objeto);
        const bool = valores.every(valor => valor !== null);
        setOrdenComplete(bool) // Verifica si todos los valores son diferentes de null
    }

    // Obtención del producto desde el componente
    const handleSetProducto = (producto) => {
        setProducto(producto);
    };

    // Sacar elementos de un objeto
    const handleAgregarOrden = (id, type) => {
        orden[type] = id;
        setOrden(orden);

        console.log(orden);
    };

    const handleRemoverOrden = (type) => {
        orden[type] = null;
        setOrden(orden);

        console.log(orden);
    };

    const handleEditarCantidad = (id) => {
        const productoActualizar = orden.filter(
            (producto) => producto.id === id
        )[0];
        setProducto(productoActualizar);
        setModal(!modal);
    };

    const handleEliminarProductoplatillo = (id) => {
        const platilloActualizado = orden.filter(
            (producto) => producto.id !== id
        );
        setOrden(platilloActualizado);
        console.log("Eliminado del Orden");
    };

    return (
        <OrdersContext.Provider
            value={{
                producto,
                orden,
                setOrden,
                handleSetProducto,
                handleAgregarOrden,
                handleEliminarProductoplatillo,
                handleEditarCantidad,
                ordenComplete,
                comprobarOrdenCompleta
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export { OrdersProvider };
export default OrdersContext;
