import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-base-100">
      <img
        src="../../src/assets/logo/404/PNG-RGB-404-2.png" // Reemplaza con la ruta correcta a tu imagen de spinner
        alt="Spinner"
        className="animate-spin h-16 w-16 md:h-24 md:w-24"
      />
    </div>
  );
};

export default Spinner;