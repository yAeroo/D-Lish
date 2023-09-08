import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Protección de rutas
import { useAuth } from "../../hooks/useAuth";

const NavCafetin = () => {
  const { t } = useTranslation();
  const { user } = useAuth({ middleware: 'auth' });
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
      <nav className="flex justify-between rounded-2xl md:rounded-2xl md:mx-9 md:my-0 px-8 pt-8 md:px-[3rem] md:py-5 list-none">
        <Link onClick={() => window.history.back()}>
          <div className='flex items-center'>
            <IoChevronBack className="w-10 h-12 mr-5 font-bold" />
            <h1 className="title text-[1.5rem] hidden md:block">{/* Regresar*/}
              {t("actions.go-back")}</h1>
            <h1 className="title hidden">{/* Regresar*/}
              {t("actions.go-back")}</h1>
          </div>
        </Link>

        <div id="pfp-cont">
          <Link to="/profile" className="text-slate-300" >
          <img src={`/assets/pfp/${user?.profile_pic}`} id="profile-pic" className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full" alt="." />
          </Link>
        </div>


      </nav>
    </section>
  );
}

export default NavCafetin;