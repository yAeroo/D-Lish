
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

const NavbarHomepage = () => {
    const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <section className='py-4 px-4 md:py-0 md:px-0'>
      {/* Eliminar "rounded-2xl" para lograr el Navbar cuadrado (y hacer los respectivos cambios en el componente que se requiera)  */}
      <nav className='flex justify-between rounded-2xl md:rounded-none bg-base-300 px-10 md:bg-transparent py-5 md:px-[3rem] md:py-5 list-none '>
        {/* Link a Homepage */}
        <Link to='/'>
          <img src="../src/assets/logo/icon_bw.png" alt="Logo" className='block md:hidden h-12 cursor-pointer my-auto' />
          <img src="../src/assets/logo/wide_white.png" alt="Logo" className='hidden md:block h-12 cursor-pointer my-auto' />
        </Link>
        <div className="md:flex hidden items-center gap-10 text-white md:my-0 my-7">
          <NavLinks />
        </div>
        <IoIosMenu className="md:hidden text-white text-4xl cursor-pointer my-2 list-none" onClick={handleMenuClick} />
      </nav>
      {showMenu && (
        <div className="md:hidden flex flex-col items-center justify-center gap-5 py-3 my-1 text-white list-none bg-base-100 0 rounded-t-lg rounded-2xl animate-fade-down animate-duration-300 animate-ease-in-out ">
          <NavLinks />
        </div>
      )}
    </section>
  )
}

export default NavbarHomepage;