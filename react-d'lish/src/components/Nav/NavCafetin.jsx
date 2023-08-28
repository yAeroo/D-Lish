import React, { useState, useEffect } from 'react';
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavCafetin = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-0 px-4 md:py-0 md:px-0">
      <nav className="flex justify-between rounded-2xl md:rounded-2xl md:mx-9 md:my-3 px-8 py-4 mt-3 md:px-[3rem] md:py-5 list-none">
        <Link onClick={() => window.history.back()}>
          <div className='flex items-center'>
            <IoChevronBack className="w-10 h-12 mr-5 font-bold" />
            <h1 className="title text-[1.5rem] hidden md:block">Regresar</h1>
            <h1 className="title hidden">Regresar</h1>
          </div>
        </Link>

        <Link to="/profile" >
          <FaUserCircle className="w-12 h-12 ml-auto" />
        </Link>


      </nav>
    </section>
  );
}

export default NavCafetin;