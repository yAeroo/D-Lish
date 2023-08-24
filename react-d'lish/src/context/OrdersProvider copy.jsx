import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";

const OrderContext = createContext();

const QuioscoProvider = ({ children }) => {
    // State - contenido a variar
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    // Función para cada actualización de pedido
    useEffect(() => {
        const nuevoTotal = pedido.reduce(
            (total, producto) => producto.precio * producto.cantidad + total,
            0
        );
        setTotal(nuevoTotal);
    }, [pedido]);

    const obtenerComponentesDish = async () => {
        try {
            const { data } = await clienteAxios(`/api/categorias`);
            setCategorias(data.data);
            setCategoriaActual(data.data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        obtenerCategorias();
    }, []);

    // Convención - evento
    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(
            (categoria) => categoria.id === id
        )[0];

        // Establecer nueva categoría con función modificadora
        setCategoriaActual(categoria);
    };

    const handleClickModal = () => {
        // Toggle de boleano
        setModal(!modal);
    };

    // Obtención del producto desde el componente
    const handleSetProducto = (producto) => {
        setProducto(producto);
    };

    // Sacar elementos de un objeto
    const handleAgregarPedido = ({ categoria_id, ...producto }) => {
        if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
            // Iterar por cada uno de los elementos
            const pedidoActualizado = pedido.map((pedidoState) =>
                pedidoState.id === producto.id ? producto : pedidoState
            );

            setPedido(pedidoActualizado);
            toast.success("Guardado Correctamente");
        } else {
            setPedido([...pedido, producto]);
            toast.success("Agregado al pedido");
        }
    };

    const handleEditarCantidad = (id) => {
        const productoActualizar = pedido.filter(
            (producto) => producto.id === id
        )[0];
        setProducto(productoActualizar);
        setModal(!modal);
    };

    const handleEliminarProductoPedido = (id) => {
        const pedidoActualizado = pedido.filter(
            (producto) => producto.id !== id
        );
        setPedido(pedidoActualizado);
        toast.success("Eliminado del Pedido");
    };

    return (
        <OrderContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};

export { QuioscoProvider };
export default OrderContext;
