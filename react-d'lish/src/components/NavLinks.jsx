import React from 'react';

const NavLinks = () => {
    const Links = [
        {
            name:"Iniciar sesión",
            link:"/auth/login",
        },
        {
            name:"Registrarse",
            link:"/auth/register",
        },
    ];
    
        return (
        <>
            {Links.map((Link, i) => (
                <li key={i} className="font-semibold hover:text-terc">
                    <a href={Link.link}>{Link.name}</a>
                </li>
            ))}
        </>
    );
};

export default NavLinks;