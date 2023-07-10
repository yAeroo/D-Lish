import { useEffect, useRef } from 'react';
import '../components/WiggleKeyframes.css'; // Importa el archivo CSS con los estilos de animación

function AnimatedSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const animateSection = () => {
      sectionElement.classList.add('animate-wiggle');
      setTimeout(() => {
        sectionElement.classList.remove('animate-wiggle');
      }, 1000); // Duración de la animación (en este caso, 1.5 segundos)
    };

    const animateTimeout = setTimeout(animateSection, 1800); // Delay de 1000 ms antes de iniciar la animación
    const animateInterval = setInterval(animateSection, 5000); // 5 segundos de espera + 1.5 segundos de animación

    return () => {
      clearTimeout(animateTimeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className='mb-10'>
      <div className="alert bg-base-100 mx-auto w-80 h-50 md:w-[50%] shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#ec6718" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>

        <div>
          <h3 className="font-bold">¡Tienes un Pedido Pendiente!</h3>
          <div className="text-xs">Se te va el tren araña</div>
        </div>
        <button className="btn btn-sm bg-error">Ver Pedido</button>
      </div>
    </section>
  );
}

export default AnimatedSection;
