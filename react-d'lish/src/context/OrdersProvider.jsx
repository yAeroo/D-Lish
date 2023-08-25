import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
    // State - contenido a variar
    // const [categorias, setCategorias] = useState([]);
    // const [categoriaActual, setCategoriaActual] = useState({});
    // const [modal, setModal] = useState(false);
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

    // Obtención del producto desde el componente
    const handleSetProducto = (producto) => {
        setProducto(producto);
    };

    // Sacar elementos de un objeto
    const handleAgregarplatillo = ({ categoria_id, ...producto }) => {
        if (orden.some((platilloState) => platilloState.id === producto.id)) {
            // Iterar por cada uno de los elementos
            const platilloActualizado = orden.map((platilloState) =>
                platilloState.id === producto.id ? producto : platilloState
            );

            setOrden(platilloActualizado);
            console.log("Guardado Correctamente");
        } else {
            setOrden([...orden, producto]);
            console.log("Agregado al Orden");
        }
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
                handleAgregarplatillo,
                handleEliminarProductoplatillo,
                handleEditarCantidad
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export { OrdersProvider };
export default OrdersContext;
