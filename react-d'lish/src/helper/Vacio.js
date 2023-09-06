export const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false; // Si se encuentra una propiedad, el objeto no está vacío
        }
    }
    return true; // Si no se encontraron propiedades, el objeto está vacío
};