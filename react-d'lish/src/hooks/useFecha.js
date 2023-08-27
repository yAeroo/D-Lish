import { useState, useEffect } from 'react';

function useFechaActual() {
    const [fechaActual, setFechaActual] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear() % 100;

        const diaFormateado = day < 10 ? `0${day}` : day;
        const mesFormateado = month < 10 ? `0${month}` : month;

        const fecha = `${diaFormateado}/${mesFormateado}/${year}`;
        setFechaActual(fecha);
    }, []);

    return fechaActual;
}

export default useFechaActual;
