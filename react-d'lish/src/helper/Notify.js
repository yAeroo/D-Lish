// Importando librería
import { toast } from 'react-toastify';

// Recibe 4 parametros: Tipo , Nombre Id, Mensaje, y su Clase Css Personalizada
export default function Notify(typeNoti, idToast, mensaje, className) {

    let notify = null;
    const commonOptions = {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark"
    };

    // Condicional - Si es notificación de error o exito
    if (typeNoti == "error") {
        notify = () => toast.error(mensaje, {
            toastId: idToast,
            className: className,
            // Tomar una copia y aplicar valores comunes
            ...commonOptions
        });
    } else {
        notify = () => toast.success(mensaje, {
            toastId: idToast,
            className: className,
            // Tomar una copia y aplicar valores comunes
            ...commonOptions
        });
    }

    return (
        notify
    )
}
