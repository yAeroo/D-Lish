import React from 'react';
import Logo from "../assets/dlish-font-png.png";
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className='flex justify-between rounded-2xl bg-black drop-shadow-md px-9 py-6'>
      <img src={Logo} alt="Logo" className='h-9 cursor-pointer'/>
      <ul className='md:flex hidden items-center gap-10 text-white'>
        <NavLinks />
      </ul>
    </nav>
    
  );
};

export default Navbar;