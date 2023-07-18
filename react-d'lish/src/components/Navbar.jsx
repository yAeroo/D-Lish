import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <section className='py-4 md:px-24 px-4 drop-shadow-2xl'>
      {/* Eliminar "rounded-2xl" para lograr el Navbar cuadrado (y hacer los respectivos cambios en el componente que se requiera)  */}
      <nav className='flex justify-between rounded-2xl bg-neutral drop-shadow-md px-9 py-5 list-none '>
        {/* Link a Homepage */}
        <Link to='/homepage'>
          <img src="../src/assets/logo/icon_bw.png" alt="Logo" className='h-12 cursor-pointer my-auto' />
        </Link>
        <div className="md:flex hidden items-center gap-10 text-white md:my-0 my-7">
          <NavLinks />
        </div>
        <IoIosMenu className="md:hidden text-white text-4xl cursor-pointer my-2 list-none" onClick={handleMenuClick} />
      </nav>
      {showMenu && (
        <div className="md:hidden flex flex-col items-center justify-center gap-5 py-3 my-1 text-white list-none bg-neutral rounded-t-lg rounded-2xl animate-fade-down animate-duration-300 animate-ease-in-out ">
          <NavLinks />
        </div>
      )}
    </section>
  );
};

export default Navbar;
